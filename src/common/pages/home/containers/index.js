import { connect } from 'react-redux';
import Home from 'common/pages/home/components';
import getPasswordsByUserId from 'common/api/getPasswordsByUserId';
import {
  getPasswordsBegin,
  getPasswordsFailure,
  getPasswordsSuccess,
} from 'common/store/rootReducer';

const getPasswordsItems = () => async dispatch => {
  try {
    dispatch(getPasswordsBegin());

    const response = await getPasswordsByUserId('1'); // @todo put real user id
    const { data } = response;

    dispatch(getPasswordsSuccess(data));
  } catch (e) {
    dispatch(getPasswordsFailure(e));

    throw e;
  }
};

const mapStateToProps = state => ({
  passwordsItems: state.items,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  getPasswordsItems: () => dispatch(getPasswordsItems()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
