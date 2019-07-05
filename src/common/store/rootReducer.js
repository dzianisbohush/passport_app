import { combineReducers } from 'redux';
import home from 'common/pages/home/store';
import edit from 'common/pages/edit/store';
import login from 'common/pages/login/store';

const rootReducer = combineReducers({
  home,
  edit,
  login,
});

export default rootReducer;
