import { connect } from 'react-redux';
import Login from 'common/pages/login/components';
import {
  loginStart,
  loginFailure,
  removeUserInfo,
} from 'common/pages/login/store/index';

const mapStateToProps = state => ({
  loading: state.login.loading,
});

const mapDispatchToProps = dispatch => ({
  loginStart: () => dispatch(loginStart()),
  loginFailure: error => dispatch(loginFailure(error)),
  removeUserInfo: () => dispatch(removeUserInfo()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
