import { connect } from 'react-redux';
import { Modal } from 'antd';
import StatusPage from 'common/pages/status/components';
import { getPasswordsItems } from 'common/pages/home/containers';
import acceptPasswords from 'common/api/acceptPasswords';
import declinePasswords from 'common/api/declinePasswords';
import { HTTP_STATUS_CODES } from 'server/constants';
import {
  acceptPasswordsPending,
  acceptPasswordsSuccess,
  acceptPasswordsFailure,
  declinePasswordsPending,
  declinePasswordsSuccess,
  declinePasswordsFailure,
} from 'common/store/actions/passwords';

const acceptPasswordsItems = userEmail => async dispatch => {
  try {
    dispatch(acceptPasswordsPending());

    const response = await acceptPasswords(userEmail);
    const { status } = response;

    if (status === HTTP_STATUS_CODES.OK) {
      Modal.info({ title: 'Passwords successfully accepted' });
    }
    dispatch(acceptPasswordsSuccess(userEmail));
  } catch (error) {
    Modal.error({ title: 'Password did not accept' });
    dispatch(acceptPasswordsFailure(error));
    throw new Error(error);
  }
};

const declinePasswordsItems = userEmail => async dispatch => {
  try {
    dispatch(declinePasswordsPending());

    const response = await declinePasswords(userEmail);
    const { status } = response;

    if (status === HTTP_STATUS_CODES.OK) {
      Modal.info({ title: 'Passwords successfully declined' });
    }
    dispatch(declinePasswordsSuccess(userEmail));
  } catch (error) {
    Modal.error({ title: 'Password did not decline' });
    dispatch(declinePasswordsFailure(error));
    throw new Error(error);
  }
};

const mapStateToProps = state => ({
  passwordsItems: state.passwords.items,
  userEmail: state.user.info.email,
});

const mapDispatchToProps = dispatch => ({
  getPasswordsItems: userEmail => dispatch(getPasswordsItems(userEmail)),
  declinePasswords: userEmail => dispatch(declinePasswordsItems(userEmail)),
  acceptPasswords: userEmail => dispatch(acceptPasswordsItems(userEmail)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatusPage);
