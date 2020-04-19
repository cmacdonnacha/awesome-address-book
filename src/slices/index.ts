import { combineReducers } from 'redux';
import contactsReducer from './contactsSlice';
import settingsReducer from './settingsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
