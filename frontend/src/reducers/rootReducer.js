import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

export default rootReducer;
