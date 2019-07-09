import { connect } from 'react-redux';

import Edit from 'common/pages/edit/components/PasswordForm';
import addPassword from 'common/api/addPassword';
import {
  addPasswordPending,
  addPasswordSuccess,
  addPasswordFailure,
} from 'common/store/rootReducer';

const addPasswordItem = item => async dispatch => {
  try {
    dispatch(addPasswordPending());

    const response = await addPassword(item);
    const { data } = response;

    dispatch(addPasswordSuccess(data));
  } catch (e) {
    dispatch(addPasswordFailure(e));
  }
};

const mapDispatchToProps = dispatch => ({
  addPasswordItem: item => dispatch(addPasswordItem(item)),
});

const mapStateToProps = state => ({
  items: state.items,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Edit);
