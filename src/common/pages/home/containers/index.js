import { connect } from 'react-redux';
import Home from 'common/pages/home/components';
import getPasswordsByUserEmail from 'common/api/getPasswordsByUserEmail';
import {
  getPasswordsBegin,
  getPasswordsFailure,
  getPasswordsSuccess,
} from '../store/index';

const getPasswordsItems = () => async dispatch => {
  try {
    dispatch(getPasswordsBegin());

    const response = await getPasswordsByUserEmail('ru@ru.ru'); // @todo put real user email

    const { data } = response;

    dispatch(getPasswordsSuccess(data || []));
  } catch (e) {
    dispatch(getPasswordsFailure(e));

    console.log(e);
  }
};

const mapStateToProps = state => ({
  passwordsItems: state.home.items,
  loading: state.home.loading,
});

const mapDispatchToProps = dispatch => ({
  getPasswordsItems: () => dispatch(getPasswordsItems()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
