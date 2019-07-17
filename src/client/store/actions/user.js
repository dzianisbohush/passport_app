import {
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from 'client/store/constants';

export const getUserPending = () => ({
  type: GET_USER_PENDING,
});

export const getUserSuccess = payload => ({
  type: GET_USER_SUCCESS,
  payload,
});

export const getUserFailure = payload => ({
  type: GET_USER_FAILURE,
  payload,
});
