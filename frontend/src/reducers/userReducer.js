import {
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from '../constants/userConstant';

const initialState = {
  loading: false,
  success: false,
  error: '',
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        success: true,
        user: null,
      };
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
