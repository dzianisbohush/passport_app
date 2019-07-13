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
} from 'common/store/constants';

export const getPasswordsPending = () => ({
  type: GET_PASSWORDS_PENDING,
});

export const getPasswordsSuccess = payload => ({
  type: GET_PASSWORDS_SUCCESS,
  payload,
});

export const getPasswordsFailure = payload => ({
  type: GET_PASSWORDS_FAILURE,
  payload,
});

export const removePasswordsItems = () => ({
  type: GET_REMOVE_PASSWORDS_ITEMS,
});

export const addPasswordPending = () => ({
  type: ADD_PASSWORD_PENDING,
});

export const addPasswordFailure = payload => ({
  type: ADD_PASSWORD_FAILURE,
  payload,
});

export const changePasswordPending = () => ({
  type: CHANGE_PASSWORD_PENDING,
});

export const changePasswordFailure = payload => ({
  type: CHANGE_PASSWORD_FAILURE,
  payload,
});

export const deletePasswordPending = () => ({
  type: DELETE_PASSWORD_PENDING,
});

export const deletePasswordSuccess = payload => ({
  type: DELETE_PASSWORD_SUCCESS,
  payload,
});
export const deletePasswordFailure = payload => ({
  type: DELETE_PASSWORD_FAILURE,
  payload,
});

export const sharePasswordsPending = () => ({
  type: SHARE_PASSWORDS_PENDING,
});

export const sharePasswordsFailure = payload => ({
  type: SHARE_PASSWORDS_FAILURE,
  payload,
});
