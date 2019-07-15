import { connect } from 'react-redux';
import { Modal } from 'antd';
import Home from 'common/pages/home/components';
import deletePassword from 'common/api/deletePasswordItem';
import getPasswordsByUserEmail from 'common/api/getPasswordsByUserEmail';
import getUsers from 'common/api/getUsers';
import sharePasswords from 'common/api/sharePasswords';
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
} from 'common/store/actions/passwords';
import {
  getUsersForSharingPending,
  getUsersForSharingSuccess,
  getUsersForSharingFailure,
} from 'common/store/actions/usersForSharing';
import { HTTP_STATUS_CODES } from 'server/constants';

const getPasswordsItems = userEmail => async dispatch => {
  try {
    dispatch(getPasswordsPending());

    const response = await getPasswordsByUserEmail(userEmail);

    const { data } = response;

    dispatch(getPasswordsSuccess(data || []));
  } catch (e) {
    dispatch(getPasswordsFailure(e));

    console.log(e);
  }
};

const getUsersForSharing = () => async dispatch => {
  try {
    dispatch(getUsersForSharingPending());

    const response = await getUsers();

    const { data } = response;

    dispatch(getUsersForSharingSuccess(data || []));
  } catch (e) {
    dispatch(getUsersForSharingFailure(e));

    console.log(e);
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
  } catch (e) {
    Modal.error({ title: 'Password did not delete' });
    dispatch(deletePasswordFailure(e));
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

    if (status === HTTP_STATUS_CODES.OK) {
      Modal.info({ title: 'Passwords successfully shared' });
    }
    dispatch(sharePasswordsSuccess());
  } catch (e) {
    Modal.error({ title: 'Password did not shared' });
    dispatch(sharePasswordsFailure(e));
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
