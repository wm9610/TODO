import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_ERROR,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_ERROR,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
  COMPLETE_TODO_REQUEST,
  COMPLETE_TODO_SUCCESS,
  COMPLETE_TODO_ERROR,
} from '../constants/todoConstant';

const initialState = {
  loading: false,
  todos: [],
  error: '',
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case FETCH_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
