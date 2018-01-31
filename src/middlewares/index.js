import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const middleware = applyMiddleware(
  promise(),
  thunk,
  // createLogger({ collapsed: true })
);

export default middleware;
