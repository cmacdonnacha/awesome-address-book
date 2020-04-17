import { combineReducers } from 'redux';
import contactsReducer from './contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
