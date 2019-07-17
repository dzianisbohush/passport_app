import { handleActions } from 'redux-actions';

import {
  getUserPending,
  getUserSuccess,
  getUserFailure,
} from 'common/store/actions/user';

const initialState = {
  info: {
    name: '',
    email: '',
    img: '',
  },
  loading: false,
  error: '',
};

// REDUCERS
export default handleActions(
  {
    [getUserPending](state) {
      return {
        ...state,
        loading: true,
      };
    },
    [getUserSuccess](state, { payload }) {
      return {
        ...state,
        info: payload,
        loading: false,
      };
    },
    [getUserFailure](state, { payload }) {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    },
  },
  initialState,
);
