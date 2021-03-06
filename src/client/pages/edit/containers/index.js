import { connect } from 'react-redux';
import { HTTP_STATUS_CODES } from 'server/constants';

import Edit from 'client/pages/edit/components/';
import changePassword from 'client/api/changePassword';
import {
  changePasswordPending,
  changePasswordFailure,
} from 'client/store/actions/passwords';
import { Modal } from 'antd';

const changePasswordItem = (item, userEmail) => async dispatch => {
  try {
    dispatch(changePasswordPending());

    const response = await changePassword({ ...item, userEmail });
    const { status } = response;

    if (status === HTTP_STATUS_CODES.OK) {
      Modal.info({ title: 'Password successfully changed' });
    }
  } catch (error) {
    Modal.error({ title: 'Password did not change' });
    dispatch(changePasswordFailure(error));
    throw new Error(error);
  }
};

const mapDispatchToProps = dispatch => ({
  changePasswordItem: (item, userEmail) =>
    dispatch(changePasswordItem(item, userEmail)),
});

const mapStateToProps = state => ({
  passwordsItems: state.passwords.items,
  userEmail: state.user.info.email,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Edit);
