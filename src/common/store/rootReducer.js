import { combineReducers } from 'redux';
import home from 'common/pages/home/store';
import edit from 'common/pages/edit/store';

const rootReducer = combineReducers({
  home,
  edit,
});

export default rootReducer;
