/* eslint-disable no-undef */
import axios from 'axios';
import {takeEvery, put, call} from 'redux-saga/effects';
import {
  registerUserError,
  registerUserSuccess,
  loginUserError,
  loginUserSuccess,
} from '../actions/userAction';
import {
  LOGIN_USER_REQUEST,
  LOGOUT_USER_REQUEST,
  REGISTER_USER_REQUEST,
} from '../constants/userConstant';

const API_URL = '/api/users/';

const registerUser = (user) => {
  return axios.post(API_URL + 'register', user);
};

const loginUser = (user) => {
  return axios.post(API_URL + 'login', user);
};

//worker saga
function* handleRegisterUser({payload}) {
  try {
    //yield registerUserRequest();
    yield call(registerUser, payload);
    yield put(registerUserSuccess());
  } catch (error) {
    yield put(registerUserError('Failed to create account. Please try again'));
  }
}

function* handleLoginUser({payload}) {
  try {
    //yield loginUserRequest();
    const response = yield call(loginUser, payload);
    yield localStorage.setItem('user', response.data._id);
    yield localStorage.setItem('token', response.data.token);
    yield put(loginUserSuccess(response.data));
  } catch (error) {
    yield put(loginUserError('Failed to login. Please try again'));
  }
}

function* handleLogoutUser() {
  yield localStorage.setItem('user', '');
  yield localStorage.setItem('token', '');
}

//watcher saga
export default function* userSaga() {
  yield takeEvery(REGISTER_USER_REQUEST, handleRegisterUser);
  yield takeEvery(LOGIN_USER_REQUEST, handleLoginUser);
  yield takeEvery(LOGOUT_USER_REQUEST, handleLogoutUser);
}
