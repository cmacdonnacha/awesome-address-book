import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { RootState } from '.';
import { selectedNationalityCodes } from './settingsSlice';
import { Contact } from 'models/Contact';
import ContactsAPI from 'services/ContactsAPI';

export interface ContactsState {
  isLoading: boolean;
  hasErrors: boolean;
  contacts: Contact[];
  searchText: string;
  isContactDetailsOpen: boolean;
}

export const initialState: ContactsState = {
  isLoading: true,
  hasErrors: false,
  contacts: [],
  searchText: '',
  isContactDetailsOpen: false,
};

/**
 * For those not familiar with the Redux Toolkit:
 *
 * Instead of dealing with reducers, actions, and all as separate files and individually creating all those action types, Redux Toolkit gives us the concept of slices.
 * A slice automatically generates reducers, action types, and action creators all in one place. As such, you'll only have to create one folder - slices.
 * Notice below, the reducers and actions will share the same name.
 */
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    getContactsSuccess: (state, action: PayloadAction<Contact[]>) => {
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
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    contactDetailsOpened: (state) => {
      state.isContactDetailsOpen = true;
    },
    contactDetailsClosed: (state) => {
      state.isContactDetailsOpen = false;
    },
  },
});

// Actions generated from the slice. We don't have to define them above since they use the same names as the reducers.
export const {
  getContactsSuccess,
  getContactsFailure,
  resetContactsList,
  setSearchText,
  contactDetailsOpened,
  contactDetailsClosed,
} = contactsSlice.actions;

/** A selector which we'll use to access the 'contacts' root state from a React component instead of using mapStateToProps (the old way).
 *  Note: This is not the `contacts` property you see at the top of this file but rather the root Contacts state in index.ts. They just share the same name.
 */
export const contactsSelector = (state: RootState) => state.contacts;

// Selector which filters contacts by searching for first and/or last name
export const searchedContactsSelector = (state: RootState) => {
  return state.contacts.contacts.filter((contact: Contact) => {
    const contactFullName = `${contact.name.first} ${contact.name.last}`.toLowerCase();
    return contactFullName.includes(state.contacts.searchText.toLowerCase());
  });
};

// The reducer. Again this is exposed by the 'contactsSlice' object created above. In the old Redux this was the equivalent to returning the current contacts state inside a separate `contactsReducer.ts` file.
export default contactsSlice.reducer;

/**
 * Asynchronous thunk action to fetch contacts
 */
export function fetchContacts() {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      // Get the selected nationality codes via the selectedNationalityCodes selector
      const selectedNationalities: string[] = selectedNationalityCodes(getState());

      const extraParams = {
        nat: selectedNationalities.join(),
      };

      const contacts: Contact[] = await ContactsAPI.getContacts(extraParams);

      dispatch(getContactsSuccess(contacts));
    } catch (error) {
      dispatch(getContactsFailure());
    }
  };
}
