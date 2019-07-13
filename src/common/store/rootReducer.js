import { combineReducers } from 'redux';
import passwords from './reducers/passwords';
import user from './reducers/user';

const rootReducer = combineReducers({
  passwords,
  user,
});

export default rootReducer;
