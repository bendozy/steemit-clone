import { combineReducers } from 'redux';
import discussions from './discussionsReducer';


const rootReducer = combineReducers({
  discussions,
});

export default rootReducer;
