import { connect } from 'react-redux';
import Home from 'common/pages/home/components';
import getPasswordsByUserEmail from 'common/api/getPasswordsByUserEmail';
import {
  getPasswordsPending,
  getPasswordsFailure,
  getPasswordsSuccess,
} from 'common/store/actions/passwords';

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

const mapStateToProps = state => ({
  passwordsItems: state.passwords.items,
  loading: state.passwords.loading,
});

const mapDispatchToProps = dispatch => ({
  getPasswordsItems: () => dispatch(getPasswordsItems()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
