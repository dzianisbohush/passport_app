import { connect } from 'react-redux';
import { Modal } from 'antd';

import Home from 'common/pages/home/components';
import deletePassword from 'common/api/deletePasswordItem';
import getPasswordsByUserEmail from 'common/api/getPasswordsByUserEmail';
import {
  getPasswordsPending,
  getPasswordsFailure,
  getPasswordsSuccess,
  deletePasswordPending,
  deletePasswordSuccess,
  deletePasswordFailure,
} from 'common/store/actions/passwords';
import { HTTP_STATUS_CODES } from 'server/constants';

const getPasswordsItems = () => async dispatch => {
  try {
    dispatch(getPasswordsPending());

    const response = await getPasswordsByUserEmail('ru@ru.ru'); // @todo put real user email

    const { data } = response;

    dispatch(getPasswordsSuccess(data || []));
  } catch (e) {
    dispatch(getPasswordsFailure(e));

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

const mapStateToProps = state => ({
  passwordsItems: state.passwords.items,
  loading: state.passwords.loading,
});

const mapDispatchToProps = dispatch => ({
  getPasswordsItems: () => dispatch(getPasswordsItems()),
  deletePasswordItem: id => dispatch(deletePasswordItem(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
