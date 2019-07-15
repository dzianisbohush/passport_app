import { combineReducers } from 'redux';
import passwords from './reducers/passwords';
import user from './reducers/user';
import usersForSharing from './reducers/usersForSharing';

const rootReducer = combineReducers({
  passwords,
  user,
  usersForSharing,
});

export default rootReducer;
