import { combineReducers } from 'redux';
import achievements from './achievements';
import authorization from './authorization';
import isLoading from './isLoading';

export default combineReducers({
  achievements,
  authorization,
  isLoading
});
