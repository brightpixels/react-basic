import { connect } from 'react-redux';

import Counter from './Counter';

const mapDispatchToProps = dispatch => ({
  increment: () => { dispatch({ type: 'INCREMENT_COUNTER_BY_ONE' }); },
  decrement: () => { dispatch({ type: 'DECREMENT_COUNTER_BY_ONE' }); },
});
const mapStateToProps = state => state.count;

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;
