import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '.';
import { defaultNationalities } from 'data/defaultNationalities';
import { Nationality } from 'models/Nationality';

export interface SettingsState {
  nationalities: Nationality[];
}

export const initialState: SettingsState = {
  nationalities: [...defaultNationalities],
};

/**
 * For those not familiar with the Redux Toolkit:
 *
 * Instead of dealing with reducers, actions, and all as separate files and individually creating all those action types, Redux Toolkit gives us the concept of slices.
 * A slice automatically generates reducers, action types, and action creators all in one place. As such, you'll only have to create one folder - slices.
 * Notice below, the reducers and actions will share the same name.
 */
const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    selectedNationalitiesUpdated: (state: SettingsState, action: PayloadAction<Nationality[]>) => {
      // Mutating the state directly is usually bad but the 'immer' package, which comes with Redux Toolkit, handles this for us.
      state.nationalities = action.payload;
    },
  },
});

// Three actions generated from the slice. We don't have to define them above since they use the same names as the reducers.
export const { selectedNationalitiesUpdated } = settingsSlice.actions;

/**
 * A selector which we'll use to access the 'settings' root state from a React component instead of using mapStateToProps (the old way).
 * Note: This is not the `settings` property you see at the top of this file but rather the root Settings state in index.ts. They just share the same name.
 */
export const settingsSelector = (state: RootState) => state.settings;

// Nationalities selector
export const nationalitiesSelector = (state: RootState) => state.settings.nationalities;

/**
 * A Memoized selector which returns the selected nationality codes.
 * Usually this selector would fire when ANY part of the state changes. However, the Reselect library which comes built into Redux Toolkit will ensure that this will only fire when the 'settings.nationalities' state changes.
 */
export const selectedNationalityCodes = createSelector(nationalitiesSelector, (nationalities) => {
  // First get the selected nationality objects
  const selectedNationalities = nationalities.filter((nationality) => nationality.isSelected);

  // Then return only the codes
  return selectedNationalities.map((nationality) => nationality.code);
});

// The reducer. Again this is exposed by the 'settingsSlice' object created above. In the old Redux this was the equivalent to returning the current settings state inside a separate `settingsReducer.ts` file.
export default settingsSlice.reducer;
