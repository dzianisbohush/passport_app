import { connect } from 'react-redux';
import Home from '../components';
import { onDecrement, onIncrement } from '../store/index';

const mapStateToProps = state => ({
  counter: state.home.count,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(onIncrement()),
  decrement: () => dispatch(onDecrement()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
