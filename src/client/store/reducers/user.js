import {
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from 'client/store/constants';

const initialState = {
  info: {
    name: '',
    email: '',
    img: '',
  },
  loading: false,
  error: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        info: action.payload,
        loading: false,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default user;
