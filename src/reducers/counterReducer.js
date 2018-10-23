const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER_BY_ONE':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT_COUNTER_BY_ONE':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default countReducer;
