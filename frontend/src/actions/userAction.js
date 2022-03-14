import {
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from '../constants/userConstant';

const registerUserRequest = (user) => {
  console.log('register user request');
  return {type: REGISTER_USER_REQUEST, payload: user};
};
// const registerUserRequest = (user) => ({
//   type: REGISTER_USER_REQUEST,
//   payload: user,
// });

const registerUserSuccess = () => ({
  type: REGISTER_USER_SUCCESS,
});

const registerUserError = (error) => ({
  type: REGISTER_USER_ERROR,
  payload: error,
});

// login user
const loginUserRequest = (user) => ({
  type: LOGIN_USER_REQUEST,
  payload: user,
});

const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

const loginUserError = (error) => ({
  type: LOGIN_USER_ERROR,
  payload: error,
});

// Logout user
const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
});

export {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  logoutUserSuccess,
};
