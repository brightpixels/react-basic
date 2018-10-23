import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ count, increment, decrement }) => (
  <div>
    <p>Counter</p>
    <p>
      <button type="button" onClick={decrement}>-</button>
      {count}
      <button type="button" onClick={increment}>+</button>
    </p>
  </div>
);
Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.string.isRequired,
  decrement: PropTypes.string.isRequired,
};
export default Counter;
