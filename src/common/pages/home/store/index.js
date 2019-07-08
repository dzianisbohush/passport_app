// CONSTS
const HOME_GET_PASSWORDS_BEGIN = 'HOME_GET_PASSWORDS_BEGIN';
const HOME_GET_PASSWORDS_SUCCESS = 'HOME_GET_PASSWORDS_SUCCESS';
const HOME_GET_PASSWORDS_FAILURE = 'HOME_GET_PASSWORDS_FAILURE';
const HOME_GET_REMOVE_PASSWORDS_ITEMS = 'HOME_GET_REMOVE_PASSWORDS_ITEMS';

const initialState = {
  items: [],
  loading: false,
  error: '',
};

// ACTIONS
export const getPasswordsBegin = () => ({
  type: HOME_GET_PASSWORDS_BEGIN,
});

export const getPasswordsSuccess = payload => ({
  type: HOME_GET_PASSWORDS_SUCCESS,
  payload,
});

export const getPasswordsFailure = payload => ({
  type: HOME_GET_PASSWORDS_FAILURE,
  payload,
});

export const removePasswordsItems = () => ({
  type: HOME_GET_REMOVE_PASSWORDS_ITEMS,
});

// REDUCER
const home = (state = initialState, action) => {
  switch (action.type) {
    case HOME_GET_PASSWORDS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case HOME_GET_PASSWORDS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case HOME_GET_PASSWORDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case HOME_GET_REMOVE_PASSWORDS_ITEMS:
      return {
        ...state,
        items: [],
        error: '',
        loading: false,
      };
    default:
      return state;
  }
};

export default home;
