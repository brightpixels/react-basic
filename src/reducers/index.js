import { combineReducers } from 'redux';

import countReducer from './counterReducer';

const rootReducer = combineReducers({
  count: countReducer,
});

export default rootReducer;
