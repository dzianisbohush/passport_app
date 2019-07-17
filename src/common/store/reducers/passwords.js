import { handleActions, combineActions } from 'redux-actions';

import {
  getPasswordsPending,
  getPasswordsSuccess,
  getPasswordsFailure,
  removePasswordsItems,
  addPasswordPending,
  addPasswordSuccess,
  addPasswordFailure,
  changePasswordPending,
  changePasswordSuccess,
  changePasswordFailure,
  deletePasswordPending,
  deletePasswordSuccess,
  deletePasswordFailure,
  sharePasswordsPending,
  sharePasswordsSuccess,
  sharePasswordsFailure,
  acceptPasswordsPending,
  acceptPasswordsSuccess,
  acceptPasswordsFailure,
  declinePasswordsPending,
  declinePasswordsSuccess,
  declinePasswordsFailure,
  uploadPasswordsPending,
  uploadPasswordsSuccess,
  uploadPasswordsFailure,
} from 'common/store/actions/passwords';

const initialState = {
  items: [],
  loading: false,
  error: '',
};

// REDUCERS
export default handleActions(
  {
    [combineActions(
      getPasswordsPending,
      addPasswordPending,
      deletePasswordPending,
      sharePasswordsPending,
      uploadPasswordsPending,
      changePasswordPending,
      acceptPasswordsPending,
      declinePasswordsPending,
    )](state) {
      return {
        ...state,
        loading: true,
      };
    },
    [getPasswordsSuccess](state, { payload }) {
      return {
        ...state,
        items: payload,
        loading: false,
      };
    },
    [removePasswordsItems](state) {
      return {
        ...state,
        items: [],
        error: '',
        loading: false,
      };
    },
    [deletePasswordSuccess](state, { payload }) {
      return {
        ...state,
        items: state.items.filter(elem => elem.id.toString() !== payload),
        loading: false,
      };
    },
    [combineActions(
      sharePasswordsSuccess,
      acceptPasswordsSuccess,
      declinePasswordsSuccess,
      addPasswordSuccess,
      changePasswordSuccess,
      uploadPasswordsSuccess,
    )](state) {
      return {
        ...state,
        loading: false,
      };
    },
    [combineActions(
      getPasswordsFailure,
      addPasswordFailure,
      changePasswordFailure,
      deletePasswordFailure,
      sharePasswordsFailure,
      acceptPasswordsFailure,
      declinePasswordsFailure,
      uploadPasswordsFailure,
    )](state, { payload }) {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    },
  },
  initialState,
);
