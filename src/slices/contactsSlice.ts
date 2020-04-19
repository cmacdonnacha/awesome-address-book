import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { RootState } from '.';
import axios from 'axios';
import { MAX_FETCH_BATCH_SIZE } from '../constants';
import { selectedNationalityCodes } from './settingsSlice';

export interface ContactsState {
  isLoading: boolean;
  hasErrors: boolean;
  contacts: Contact[];
}

export interface Contact {
  id: string;
  name: ContactName;
  username: string;
  avatarUrl: string;
  email: string;
}
export interface ContactName {
  first: string;
  last: string;
}

export const initialState: ContactsState = {
  isLoading: false,
  hasErrors: false,
  contacts: [],
};

// Instead of dealing with reducers, actions, and all as separate files and individually creating all those action types, Redux Toolkit gives us the concept of slices.
// A slice automatically generates reducers, action types, and action creators all in one place. As such, you'll only have to create one folder - slices.
// Notice below, the reducers and actions will share the same name.
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    getContacts: (state: ContactsState) => {
      state.isLoading = true;
    },
    getContactsSuccess: (state: ContactsState, action: PayloadAction<Contact[]>) => {
      // Mutating the state directly is usually bad but the 'immer' package, which comes with Redux Toolkit, handles this for us.
      state.contacts = [...state.contacts, ...action.payload];
      state.isLoading = false;
      state.hasErrors = false;
    },
    getContactsFailure: (state) => {
      state.isLoading = false;
      state.hasErrors = true;
    },
    resetContactsList: (state) => {
      state.contacts = [];
    },
  },
});

// Three actions generated from the slice. We don't have to define them above since they use the same names as the reducers.
export const { getContacts, getContactsSuccess, getContactsFailure, resetContactsList } = contactsSlice.actions;

// A selector which we'll use to access the 'contacts' root state from a React component instead of using mapStateToProps (the old way).
// Note: This is not the `contacts` property you see at the top of this file but rather the root Contacts state in index.ts. They just share the same name.
export const contactsSelector = (state: RootState) => state.contacts;

// The reducer. Again this is exposed by the 'contactsSlice' object created above. In the old Redux this was the equivalent to returning the current contacts state inside a separate `contactsReducer.ts` file.
export default contactsSlice.reducer;

// Asynchronous thunk action
export function fetchContacts() {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(getContacts());

    // Get the selected nationality codes via the selectedNationalityCodes selector
    const selectedNationalities = selectedNationalityCodes(getState());

    try {
      const response = await axios.get(`https://randomuser.me/api?results=${MAX_FETCH_BATCH_SIZE}&nat=${selectedNationalities}`);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const contacts: Contact[] = response.data.results.map((user: any) => {
        return {
          id: user.login.uuid,
          name: user.name,
          username: user.login.username,
          avatarUrl: user.picture.large,
          email: user.email,
        };
      });

      dispatch(getContactsSuccess(contacts));
    } catch (error) {
      dispatch(getContactsFailure());
    }
  };
}
