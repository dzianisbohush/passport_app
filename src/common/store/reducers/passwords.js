import {
  GET_PASSWORDS_PENDING,
  GET_PASSWORDS_SUCCESS,
  GET_PASSWORDS_FAILURE,
  GET_REMOVE_PASSWORDS_ITEMS,
  ADD_PASSWORD_PENDING,
  ADD_PASSWORD_FAILURE,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_PENDING,
  DELETE_PASSWORD_PENDING,
  DELETE_PASSWORD_SUCCESS,
  DELETE_PASSWORD_FAILURE,
  SHARE_PASSWORDS_PENDING,
  SHARE_PASSWORDS_FAILURE,
  UPLOAD_PASSWORDS_PENDING,
  UPLOAD_PASSWORDS_FAILURE,
} from 'common/store/constants';

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
    case DELETE_PASSWORD_PENDING:
      return {
        ...state,
        loading: false,
      };
    case DELETE_PASSWORD_SUCCESS:
      return {
        ...state,
        items: state.items.filter(
          elem => elem.id.toString() !== action.payload,
        ),
        loading: false,
      };
    case DELETE_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SHARE_PASSWORDS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case SHARE_PASSWORDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case UPLOAD_PASSWORDS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_PASSWORDS_FAILURE:
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
