import { connect } from 'react-redux';
import Home from 'common/pages/home/components';
import getPasswordsByUserId from 'common/api/getPasswordsByUserId';
import {
  getPasswordsPending,
  getPasswordsFailure,
  getPasswordsSuccess,
} from 'common/store/rootReducer';

const getPasswordsItems = () => async dispatch => {
  try {
    dispatch(getPasswordsPending());

    const response = await getPasswordsByUserId('1'); // @todo put real user id
    const { data } = response;

    dispatch(getPasswordsSuccess(data));
  } catch (e) {
    dispatch(getPasswordsFailure(e));
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
