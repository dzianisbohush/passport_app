import { connect } from 'react-redux';
import { HTTP_STATUS_CODES } from 'server/constants';
import { Modal } from 'antd';

import AddPage from 'common/pages/add/components/';
import addPassword from 'common/api/addPassword';
import {
  addPasswordPending,
  addPasswordFailure,
} from 'common/store/actions/passwords';

const addPasswordItem = item => async dispatch => {
  try {
    dispatch(addPasswordPending());

    const response = await addPassword({ ...item, userEmail: 'ru@ru.ru' }); // @todo put real email
    const { status } = response;

    if (status === HTTP_STATUS_CODES.CREATED) {
      Modal.info({ title: 'Password successfully created' });
    }
  } catch (e) {
    Modal.error({ title: 'Password did not created' });
    dispatch(addPasswordFailure(e));
  }
};

const mapDispatchToProps = dispatch => ({
  addPasswordItem: item => dispatch(addPasswordItem(item)),
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPage);
