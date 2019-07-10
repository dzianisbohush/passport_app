import { combineReducers } from 'redux';
import passwords from './reducers/passwords';

const rootReducer = combineReducers({
  passwords,
});

export default rootReducer;
