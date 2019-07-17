import { createAction } from 'redux-actions';

// CONSTANTS
export const GET_USER_PENDING = 'GET_USER_PENDING';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

// ACTION CREATORS
export const getUserPending = createAction(GET_USER_PENDING);
export const getUserSuccess = createAction(GET_USER_SUCCESS);
export const getUserFailure = createAction(GET_USER_FAILURE);
