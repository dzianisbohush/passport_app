import { connect } from 'react-redux';

import Edit from 'common/pages/edit/components/PasswordForm';
import addPassword from 'common/api/addPassword';
import {
  addPasswordBegin,
  addPasswordSuccess,
  addPasswordFailure,
} from 'common/store/rootReducer';

const addPasswordItem = item => async dispatch => {
  try {
    dispatch(addPasswordBegin());

    const response = await addPassword(item); // @todo put real user id
    const { data } = response;

    dispatch(addPasswordSuccess(data));
  } catch (e) {
    dispatch(addPasswordFailure(e));

    throw e;
  }
};

const mapDispatchToProps = dispatch => ({
  addPasswordItem: item => dispatch(addPasswordItem(item)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(Edit);
