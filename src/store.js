import { createStore, compose } from 'redux';
// import { bindWithDispatch } from 'feathers-redux';

import middleware from './middlewares';

import { appReducer } from './reducers'

const store = createStore(
  appReducer,
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

// export const services = bindWithDispatch(store.dispatch, rawServices);
// export const services = rawServices;

export default store;
