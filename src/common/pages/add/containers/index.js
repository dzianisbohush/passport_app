import { connect } from 'react-redux';

import AddPage from 'common/pages/add/components';
import addPassword from 'common/api/addPassword';
import {
  addPasswordPending,
  addPasswordFailure,
} from 'common/store/actions/passwords';

const addPasswordItem = item => async dispatch => {
  try {
    dispatch(addPasswordPending());

    const response = await addPassword({ ...item, userEmail: 'ru@ruru' }); // @todo put real email
    const { status } = response;

    if (status === 201) {
      alert('Password successfully created');
    }
  } catch (e) {
    alert('Password did not created');
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
