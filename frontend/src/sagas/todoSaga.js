import axios from 'axios';
import {takeEvery, call, put} from 'redux-saga/effects';
import {
  createTodoError,
  createTodoSuccess,
  fetchTodoError,
  fetchTodoSuccess,
  completeTodoError,
  completeTodoSuccess,
  deleteTodoError,
  deleteTodoSuccess,
} from '../actions/todoAction';

import {
  FETCH_TODO_REQUEST,
  CREATE_TODO_REQUEST,
  UPDATE_TODO_REQUEST,
  DELETE_TODO_REQUEST,
  COMPLETE_TODO_REQUEST,
} from '../constants/todoConstant';

const API_URL = '/api/todos/';

const fetchTodo = () => {
  return axios.get(API_URL + localStorage.getItem('user'));
};

const createTodo = (todo) => {
  return axios.post(API_URL + '/create/' + localStorage.getItem('user'), todo);
};

const completeTodo = (todoId) => {
  return axios.put(API_URL + '/complete/' + todoId);
};

const deleteTodo = (todoId) => {
  return axios.delete(API_URL + todoId);
};

//worker saga
function* handleFetchTodo() {
  try {
    const response = yield call(fetchTodo);
    yield put(fetchTodoSuccess(response.data));
  } catch (error) {
    fetchTodoError({});
  }
}

function* handleCreateTodo({payload}) {
  try {
    const response = yield call(createTodo, payload);
    yield put(createTodoSuccess(response.data));
  } catch (error) {
    createTodoError('Failed to create new TODO');
  }
}

function* handleCompleteTodo({payload}) {
  try {
    const response = yield call(completeTodo, payload);
    yield put(completeTodoSuccess(response.data));
  } catch (error) {
    completeTodoError('Failed to update complete status');
  }
}

function* handleDeleteTodo({payload}) {
  try {
    const response = yield call(deleteTodo, payload);
    yield put(deleteTodoSuccess(response.data.id));
  } catch (error) {
    deleteTodoError('Failed to delete TODO item');
  }
}

//watcher saga
function* todoSaga() {
  yield takeEvery(FETCH_TODO_REQUEST, handleFetchTodo);
  yield takeEvery(CREATE_TODO_REQUEST, handleCreateTodo);
  yield takeEvery(COMPLETE_TODO_REQUEST, handleCompleteTodo);
  yield takeEvery(DELETE_TODO_REQUEST, handleDeleteTodo);
}

export default todoSaga;
