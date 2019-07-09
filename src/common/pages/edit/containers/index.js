import { connect } from 'react-redux';
import { HTTP_STATUS_CODES } from 'server/constants';

import Edit from 'common/pages/edit/components/';
import changePassword from 'common/api/changePassword';
import {
  changePasswordPending,
  changePasswordFailure,
} from 'common/store/actions/passwords';
import { Modal } from 'antd';

const changePasswordItem = item => async dispatch => {
  try {
    dispatch(changePasswordPending());

    const response = await changePassword({ ...item, userEmail: 'ru@ru.ru' }); // @todo real
    // email
    const { status } = response;

    if (status === HTTP_STATUS_CODES.OK) {
      Modal.info({ title: 'Password successfully changed' });
    }
  } catch (e) {
    Modal.error({ title: 'Password did not change' });
    dispatch(changePasswordFailure(e));
  }
};

const mapDispatchToProps = dispatch => ({
  changePasswordItem: item => dispatch(changePasswordItem(item)),
});

const mapStateToProps = state => ({
  passwordsItems: state.passwords.items,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Edit);
