import {
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_REQUEST,
  REGISTER_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from '../constants/userConstant';

const user = localStorage.getItem('user');

const initialState = {
  loading: false,
  registerSuccess: false,
  loginSuccess: false,
  error: '',
  user: user ? user : null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        LoginSuccess: false,
        error: '',
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loginSuccess: true,
        user: action.payload,
        error: '',
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        loginSuccess: false,
        error: action.payload,
        user: null,
      };
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        registerSuccess: false,
        loginSuccess: false,
        user: null,
      };
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
        registerSuccess: false,
        error: '',
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        registerSuccess: true,
        error: '',
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        registerSuccess: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
