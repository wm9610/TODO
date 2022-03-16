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

const fetchTodoRequest = () => ({
  type: FETCH_TODO_REQUEST,
});

const fetchTodoSuccess = (todos) => ({
  type: FETCH_TODO_SUCCESS,
  payload: todos,
});

const fetchTodoError = (error) => ({
  type: FETCH_TODO_ERROR,
  payload: error,
});

const createTodoRequest = (todo) => ({
  type: CREATE_TODO_REQUEST,
  payload: todo,
});

const createTodoSuccess = (todo) => ({
  type: CREATE_TODO_SUCCESS,
  payload: todo,
});

const createTodoError = (error) => ({
  type: CREATE_TODO_ERROR,
  payload: error,
});

const updateTodoRequest = (todo) => ({
  type: UPDATE_TODO_REQUEST,
  payload: todo,
});

const updateTodoSuccess = (todo) => ({
  type: UPDATE_TODO_SUCCESS,
  payload: todo,
});

const updateTodoError = (error) => ({
  type: UPDATE_TODO_ERROR,
  payload: error,
});

const deleteTodoRequest = (todoId) => ({
  type: DELETE_TODO_REQUEST,
  payload: todoId,
});

const deleteTodoSuccess = () => ({
  type: DELETE_TODO_SUCCESS,
});

const deleteTodoError = (error) => ({
  type: DELETE_TODO_ERROR,
  payload: error,
});

const completeTodoRequest = (todoId) => ({
  type: COMPLETE_TODO_REQUEST,
  payload: todoId,
});

const completeTodoSuccess = () => ({
  type: COMPLETE_TODO_SUCCESS,
});

const completeTodoError = (error) => ({
  type: COMPLETE_TODO_ERROR,
  payload: error,
});

export {
  fetchTodoRequest,
  fetchTodoSuccess,
  fetchTodoError,
  createTodoRequest,
  createTodoSuccess,
  createTodoError,
  updateTodoRequest,
  updateTodoSuccess,
  updateTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  completeTodoRequest,
  completeTodoSuccess,
  completeTodoError,
};
