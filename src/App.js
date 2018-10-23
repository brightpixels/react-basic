import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import CounterContainer from './components/counter/CounterContainer';
import rootReducer from './reducers';

const myOwnlogger = () => next => (action) => {
  next(action);
};
const storeWithMiddleware = compose(
  applyMiddleware(logger, myOwnlogger),
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const store = createStore(rootReducer, storeWithMiddleware);
const App = () => (
  <Provider store={store}>
    <div className="App">
      <CounterContainer />
    </div>
  </Provider>
);

export default App;
