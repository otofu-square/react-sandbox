// @flow
import { connect } from 'react-redux';
import { counterActions } from '../../../modules/counter';

const mapStateToProps = ({ count }) => ({
  count,
});

const mapDispatchToProps = dispatch => ({
  onPlusClick: () => dispatch(counterActions.increment()),
  onMinusClick: () => dispatch(counterActions.decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps);
