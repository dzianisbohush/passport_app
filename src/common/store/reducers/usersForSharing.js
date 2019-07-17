import { handleActions } from 'redux-actions';

import {
  getUsersForSharingPending,
  getUsersForSharingSuccess,
  getUsersForSharingFailure,
} from 'common/store/actions/usersForSharing';

const initialState = {
  items: [],
  loading: false,
  error: '',
};

// REDUCERS
export default handleActions(
  {
    [getUsersForSharingPending](state) {
      return {
        ...state,
        loading: true,
      };
    },
    [getUsersForSharingSuccess](state, { payload }) {
      return {
        ...state,
        items: payload,
        loading: false,
      };
    },
    [getUsersForSharingFailure](state, { payload }) {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    },
  },
  initialState,
);
