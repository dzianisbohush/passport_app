import { connect } from 'react-redux';

import Edit from 'common/pages/edit/components';
import changePassword from 'common/api/changePassword';
import {
  changePasswordPending,
  changePasswordFailure,
} from 'common/store/actions/passwords';

const changePasswordItem = item => async dispatch => {
  try {
    dispatch(changePasswordPending());

    const response = await changePassword({ ...item, userEmail: 'ru@ruru' }); // @todo real
    // email
    const { status } = response;

    if (status === 200) {
      alert('Password successfully changed');
    }
  } catch (e) {
    alert('Password did not change');
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
