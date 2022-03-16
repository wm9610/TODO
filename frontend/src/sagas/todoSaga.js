import axios from 'axios';
import {takeEvery, call, put} from 'redux-saga/effects';
import {fetchTodoError, fetchTodoSuccess} from '../actions/todoAction';

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

const API_URL = '/api/todos/';

const fetchTodo = () => {
  return axios.get(API_URL + localStorage.getItem('user'));
};

//worker saga
function* handlefetchTodo() {
  try {
    const response = yield call(fetchTodo);
    yield put(fetchTodoSuccess(response.data));
  } catch (error) {
    fetchTodoError('Cannot fetch todo list from server');
  }
}

//watcher saga
function* todoSaga() {
  yield takeEvery(FETCH_TODO_REQUEST, handlefetchTodo);
}

export default todoSaga;
