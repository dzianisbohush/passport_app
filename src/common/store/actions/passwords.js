import {
  GET_PASSWORDS_PENDING,
  GET_PASSWORDS_SUCCESS,
  GET_PASSWORDS_FAILURE,
  GET_REMOVE_PASSWORDS_ITEMS,
  ADD_PASSWORD_PENDING,
  ADD_PASSWORD_FAILURE,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_PENDING,
} from '../constants';

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
