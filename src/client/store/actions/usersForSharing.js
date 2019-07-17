import { createAction } from 'redux-actions';

// CONSTANTS
export const GET_USERS_FOR_SHARING_PENDING = 'GET_USERS_FOR_SHARING_PENDING';
export const GET_USERS_FOR_SHARING_SUCCESS = 'GET_USERS_FOR_SHARING_SUCCESS';
export const GET_USERS_FOR_SHARING_FAILURE = 'GET_USERS_FOR_SHARING_FAILURE';

// ACTION CREATORS
export const getUsersForSharingPending = createAction(
  GET_USERS_FOR_SHARING_PENDING,
);
export const getUsersForSharingSuccess = createAction(
  GET_USERS_FOR_SHARING_SUCCESS,
);
export const getUsersForSharingFailure = createAction(
  GET_USERS_FOR_SHARING_FAILURE,
);
