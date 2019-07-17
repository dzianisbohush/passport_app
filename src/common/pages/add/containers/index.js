import { connect } from 'react-redux';
import { HTTP_STATUS_CODES } from 'server/constants';
import { Modal } from 'antd';

import AddPage from 'common/pages/add/components/';
import addPassword from 'common/api/addPassword';
import {
  addPasswordPending,
  addPasswordFailure,
} from 'common/store/actions/passwords';

const addPasswordItem = (item, userEmail) => async dispatch => {
  try {
    dispatch(addPasswordPending());

    const response = await addPassword({ ...item, userEmail });
    const { status } = response;

    if (status === HTTP_STATUS_CODES.CREATED) {
      Modal.info({ title: 'Password successfully created' });
    }
  } catch (error) {
    Modal.error({ title: 'Password did not created' });
    dispatch(addPasswordFailure(error));
    throw new Error(error);
  }
};

const mapDispatchToProps = dispatch => ({
  addPasswordItem: (item, userEmail) =>
    dispatch(addPasswordItem(item, userEmail)),
});

const mapStateToProps = state => ({
  userEmail: state.user.info.email,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPage);
