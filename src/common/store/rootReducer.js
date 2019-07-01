import { combineReducers } from 'redux';
import home from '../pages/home/store';
import edit from '../pages/edit/store';

const rootReducer = combineReducers({
  home,
  edit
});

export default rootReducer;
