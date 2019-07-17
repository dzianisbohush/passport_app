import {
  GET_USERS_FOR_SHARING_SUCCESS,
  GET_USERS_FOR_SHARING_PENDING,
  GET_USERS_FOR_SHARING_FAILURE,
} from 'client/store/constants';

export const getUsersForSharingPending = () => ({
  type: GET_USERS_FOR_SHARING_PENDING,
});

export const getUsersForSharingSuccess = payload => ({
  type: GET_USERS_FOR_SHARING_SUCCESS,
  payload,
});

export const getUsersForSharingFailure = payload => ({
  type: GET_USERS_FOR_SHARING_FAILURE,
  payload,
});
