import { combineReducers } from 'redux';
import commentsReducer from './reducer_comments';
import authReducer from "./auth";


// link all reducers to a single root reducer, to create the redux store
const rootReducer = combineReducers({
  comments: commentsReducer,
  auth: authReducer
});

export default rootReducer;
