import { connect } from 'react-redux';
import Edit from '../components';
import { onDecrement, onIncrement } from '../store/index';

const mapStateToProps = state => ({
  counter: state.edit.count,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(onIncrement()),
  decrement: () => dispatch(onDecrement()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Edit);
