import {
  GET_USERS_FOR_SHARING_SUCCESS,
  GET_USERS_FOR_SHARING_PENDING,
  GET_USERS_FOR_SHARING_FAILURE,
} from 'client/store/constants';

const initialState = {
  items: [],
  loading: false,
  error: '',
};

const usersForSharing = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_FOR_SHARING_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_FOR_SHARING_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case GET_USERS_FOR_SHARING_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default usersForSharing;
