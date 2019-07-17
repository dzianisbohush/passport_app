import { connect } from 'react-redux';
import { Modal } from 'antd';

import Home from 'common/pages/home/components';
import deletePassword from 'common/api/deletePasswordItem';
import getPasswordsByUserEmail from 'common/api/getPasswordsByUserEmail';
import getUsers from 'common/api/getUsers';
import sharePasswords from 'common/api/sharePasswords';
import uploadPasswords from 'common/api/uploadPasswords';
import {
  getPasswordsPending,
  getPasswordsFailure,
  getPasswordsSuccess,
  deletePasswordPending,
  deletePasswordSuccess,
  deletePasswordFailure,
  sharePasswordsPending,
  sharePasswordsSuccess,
  sharePasswordsFailure,
  uploadPasswordsPending,
  uploadPasswordsFailure,
} from 'common/store/actions/passwords';
import {
  getUsersForSharingPending,
  getUsersForSharingSuccess,
  getUsersForSharingFailure,
} from 'common/store/actions/usersForSharing';
import { HTTP_STATUS_CODES } from 'server/constants';

export const getPasswordsItems = userEmail => async dispatch => {
  try {
    dispatch(getPasswordsPending());

    const response = await getPasswordsByUserEmail(userEmail);

    const { data } = response;

    dispatch(getPasswordsSuccess(data));
  } catch (error) {
    dispatch(getPasswordsFailure(error));

    throw new Error(error);
  }
};

const getUsersForSharing = () => async dispatch => {
  try {
    dispatch(getUsersForSharingPending());

    const response = await getUsers();

    const { data } = response;

    dispatch(getUsersForSharingSuccess(data));
  } catch (error) {
    dispatch(getUsersForSharingFailure(error));

    throw new Error(error);
  }
};

const deletePasswordItem = id => async dispatch => {
  try {
    dispatch(deletePasswordPending());

    const response = await deletePassword(id);
    const { status } = response;

    if (status === HTTP_STATUS_CODES.OK) {
      Modal.info({ title: 'Password successfully deleted' });
    }
    dispatch(deletePasswordSuccess(id));
  } catch (error) {
    Modal.error({ title: 'Password did not delete' });
    dispatch(deletePasswordFailure(error));
    throw new Error(error);
  }
};

const sharePasswordsItems = (
  userEmail,
  emailsForSharing,
  passwordsToShare,
) => async dispatch => {
  try {
    dispatch(sharePasswordsPending());

    const response = await sharePasswords(
      userEmail,
      emailsForSharing,
      passwordsToShare,
    );
    const { status } = response;

    if (status === HTTP_STATUS_CODES.CREATED) {
      Modal.info({ title: 'Passwords successfully shared' });
    }
    dispatch(sharePasswordsSuccess());
  } catch (error) {
    Modal.error({ title: 'Password did not shared' });
    dispatch(sharePasswordsFailure(error));
    throw new Error(error);
  }
};

const uploadPasswordsInCSV = (formData, userEmail) => async dispatch => {
  try {
    dispatch(uploadPasswordsPending());
    await uploadPasswords(formData);
    dispatch(getPasswordsItems(userEmail));
    Modal.info({ title: 'Passwords successfully added' });
  } catch (error) {
    dispatch(uploadPasswordsFailure());
    Modal.error({ title: 'Passwords did not add' });
    throw new Error(error);
  }
};

const mapStateToProps = state => ({
  passwordsItems: state.passwords.items,
  loading: state.passwords.loading,
  usersForSharing: state.usersForSharing.items.filter(
    item => item.email !== state.user.info.email,
  ),
  userEmail: state.user.info.email,
});

const mapDispatchToProps = dispatch => ({
  getPasswordsItems: userEmail => dispatch(getPasswordsItems(userEmail)),
  deletePasswordItem: id => dispatch(deletePasswordItem(id)),
  sharePasswords: (userEmail, emailsForSharing, passwordsToShare) =>
    dispatch(
      sharePasswordsItems(userEmail, emailsForSharing, passwordsToShare),
    ),
  getUsersForSharing: () => dispatch(getUsersForSharing()),
  uploadPasswordsInCSV: (formData, userEmail) =>
    dispatch(uploadPasswordsInCSV(formData, userEmail)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
