import { createStore, compose } from 'redux';

import middleware from './middlewares';

import { appReducer } from './reducers'

const store = createStore(
  appReducer,
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
