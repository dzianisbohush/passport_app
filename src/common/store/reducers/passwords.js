import {
  GET_PASSWORDS_PENDING,
  GET_PASSWORDS_SUCCESS,
  GET_PASSWORDS_FAILURE,
  GET_REMOVE_PASSWORDS_ITEMS,
  ADD_PASSWORD_PENDING,
  ADD_PASSWORD_FAILURE,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_PENDING,
} from '../constants';

const initialState = {
  items: [],
  loading: false,
  error: '',
};

const passwords = (state = initialState, action) => {
  switch (action.type) {
    case GET_PASSWORDS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_PASSWORDS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case GET_PASSWORDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_REMOVE_PASSWORDS_ITEMS:
      return {
        ...state,
        items: [],
        error: '',
        loading: false,
      };
    case ADD_PASSWORD_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CHANGE_PASSWORD_PENDING:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default passwords;
