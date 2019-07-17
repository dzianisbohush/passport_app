import { connect } from 'react-redux';
import {
  getUserPending,
  getUserSuccess,
  getUserFailure,
} from 'client/store/actions/user';
import getUserInfoByUserEmail from 'client/api/getUserInfoByUserEmail';
import HeaderBlock from 'client/blocks/HeaderBlock/components';

export const getUserInfo = userEmail => async dispatch => {
  try {
    dispatch(getUserPending());

    const response = await getUserInfoByUserEmail(userEmail);

    const { data } = response;

    dispatch(getUserSuccess(data || {}));
  } catch (e) {
    dispatch(getUserFailure(e));

    console.log(e);
  }
};

const mapStateToProps = state => ({
  userName: state.user.info.name,
  userPhotoURL: state.user.info.img,
  hasPasswordsForAccepting: !!state.passwords.items.filter(
    item => !item.isAccepted,
  ).length,
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: userEmail => dispatch(getUserInfo(userEmail)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderBlock);
