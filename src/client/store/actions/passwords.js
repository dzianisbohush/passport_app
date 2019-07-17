import { createAction } from 'redux-actions';

// CONSTANTS
export const GET_PASSWORDS_PENDING = 'GET_PASSWORDS_PENDING';
export const GET_PASSWORDS_SUCCESS = 'GET_PASSWORDS_SUCCESS';
export const GET_PASSWORDS_FAILURE = 'GET_PASSWORDS_FAILURE';
export const PASSWORDS_REMOVE_ITEMS = 'PASSWORDS_REMOVE_ITEMS';

export const ADD_PASSWORD_PENDING = 'ADD_PASSWORD_PENDING';
export const ADD_PASSWORD_SUCCESS = 'ADD_PASSWORD_SUCCESS';
export const ADD_PASSWORD_FAILURE = 'ADD_PASSWORD_FAILURE';

export const CHANGE_PASSWORD_PENDING = 'CHANGE_PASSWORD_PENDING';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE';

export const DELETE_PASSWORD_PENDING = 'DELETE_PASSWORD_PENDING';
export const DELETE_PASSWORD_SUCCESS = 'DELETE_PASSWORD_SUCCESS';
export const DELETE_PASSWORD_FAILURE = 'DELETE_PASSWORD_FAILURE';

export const SHARE_PASSWORDS_PENDING = 'SHARE_PASSWORDS_PENDING';
export const SHARE_PASSWORDS_SUCCESS = 'SHARE_PASSWORDS_SUCCESS';
export const SHARE_PASSWORDS_FAILURE = 'SHARE_PASSWORDS_FAILURE';

export const ACCEPT_PASSWORDS_PENDING = 'ACCEPT_PASSWORDS_PENDING';
export const ACCEPT_PASSWORDS_SUCCESS = 'ACCEPT_PASSWORDS_SUCCESS';
export const ACCEPT_PASSWORDS_FAILURE = 'ACCEPT_PASSWORDS_FAILURE';

export const DECLINE_PASSWORDS_PENDING = 'DECLINE_PASSWORDS_PENDING';
export const DECLINE_PASSWORDS_SUCCESS = 'DECLINE_PASSWORDS_SUCCESS';
export const DECLINE_PASSWORDS_FAILURE = 'DECLINE_PASSWORDS_FAILURE';

export const UPLOAD_PASSWORDS_PENDING = 'UPLOAD_PASSWORDS_PENDING';
export const UPLOAD_PASSWORDS_SUCCESS = 'UPLOAD_PASSWORDS_SUCCESS';
export const UPLOAD_PASSWORDS_FAILURE = 'UPLOAD_PASSWORDS_FAILURE';

// ACTION CREATORS
export const getPasswordsPending = createAction(GET_PASSWORDS_PENDING);
export const getPasswordsSuccess = createAction(GET_PASSWORDS_SUCCESS);
export const getPasswordsFailure = createAction(GET_PASSWORDS_FAILURE);
export const removePasswordsItems = createAction(PASSWORDS_REMOVE_ITEMS);

export const addPasswordPending = createAction(ADD_PASSWORD_PENDING);
export const addPasswordSuccess = createAction(ADD_PASSWORD_SUCCESS);
export const addPasswordFailure = createAction(ADD_PASSWORD_FAILURE);

export const changePasswordPending = createAction(CHANGE_PASSWORD_PENDING);
export const changePasswordSuccess = createAction(CHANGE_PASSWORD_SUCCESS);
export const changePasswordFailure = createAction(CHANGE_PASSWORD_FAILURE);

export const deletePasswordPending = createAction(DELETE_PASSWORD_PENDING);
export const deletePasswordSuccess = createAction(DELETE_PASSWORD_SUCCESS);
export const deletePasswordFailure = createAction(DELETE_PASSWORD_FAILURE);

export const sharePasswordsPending = createAction(SHARE_PASSWORDS_PENDING);
export const sharePasswordsSuccess = createAction(SHARE_PASSWORDS_SUCCESS);
export const sharePasswordsFailure = createAction(SHARE_PASSWORDS_FAILURE);

export const acceptPasswordsPending = createAction(ACCEPT_PASSWORDS_PENDING);
export const acceptPasswordsSuccess = createAction(ACCEPT_PASSWORDS_SUCCESS);
export const acceptPasswordsFailure = createAction(ACCEPT_PASSWORDS_FAILURE);

export const declinePasswordsPending = createAction(DECLINE_PASSWORDS_PENDING);
export const declinePasswordsSuccess = createAction(DECLINE_PASSWORDS_SUCCESS);
export const declinePasswordsFailure = createAction(DECLINE_PASSWORDS_FAILURE);

export const uploadPasswordsPending = createAction(UPLOAD_PASSWORDS_PENDING);
export const uploadPasswordsSuccess = createAction(UPLOAD_PASSWORDS_SUCCESS);
export const uploadPasswordsFailure = createAction(UPLOAD_PASSWORDS_FAILURE);
