// CONSTS
const LOGIN_LOGIN_START = 'LOGIN_LOGIN_START';
const LOGIN_LOGIN_FAILURE = 'LOGIN_LOGIN_FAILURE';
const LOGIN_REMOVE_USER_INFO = 'LOGIN_REMOVE_USER_INFO';

const initialState = {
  loading: false,
  error: '',
};

// ACTIONS
export const loginStart = () => ({
  type: LOGIN_LOGIN_START,
});

export const loginFailure = payload => ({
  type: LOGIN_LOGIN_FAILURE,
  payload,
});

export const removeUserInfo = () => ({
  type: LOGIN_REMOVE_USER_INFO,
});

// REDUCER
const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGIN_REMOVE_USER_INFO:
      return {
        ...state,
        userInfo: {},
      };
    default:
      return state;
  }
};

export default login;
