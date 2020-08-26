import * as axios from "axios";

const SET_AUTH_DATA = "auth-reducer/SET_AUTH_DATA";
const CLEAR_AUTH_DATA = "auth-reducer/CLEAR_AUTH_DATA";
const SET_ERROR_MESSAGE = "auth-reducer/SET_ERROR_MESSAGE";
const CLEAR_ERROR_MESSAGE = "auth-reducer/CLEAR_ERROR_MESSAGE";

let initialState = {
  isAuth: false,
  username: null,
  userAvatarSrc: null,
  errorMessage: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        isAuth: true,
        username: action.username,
        userAvatarSrc: action.avatar,
      };
    case CLEAR_AUTH_DATA:
      return {
        ...state,
        isAuth: false,
        username: null,
        userAvatarSrc: null,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: null,
      };
    default:
      return state;
  }
};

/* ACTION CREATORS  */
export const logout = () => {
  return { type: CLEAR_AUTH_DATA };
};

export const setAuthData = (username, avatar) => {
  return { type: SET_AUTH_DATA, username, avatar };
};

const setErrorMessage = (errorMessage) => {
  return { type: SET_ERROR_MESSAGE, errorMessage };
};

const clearErrorMessage = () => {
  return { type: CLEAR_ERROR_MESSAGE };
};

/* THUNK CREATORS  */
export const login = ({ username }) => async (dispatch) => {
  try {
    let response = await axios.get(`https://api.github.com/users/${username}`);
    if (response.statusText === "OK") {
      dispatch(setAuthData(response.data.login, response.data.avatar_url));
      localStorage.isAuth = true;
      localStorage.login = response.data.login;
      localStorage.avatarSrc = response.data.avatar_url;
    }
  } catch (e) {
    if (e.response.status === 404) {
      dispatch(setErrorMessage(`Пользователь не найден`));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);
    }
  }
};

export const clearSPALoginData = () => (dispatch) => {
  dispatch(logout());
  localStorage.clear();
};

export default authReducer;
