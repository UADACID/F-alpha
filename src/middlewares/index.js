import { applyMiddleware } from 'redux';
import logger, { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const middleware = [];
middleware.push(thunk)
middleware.push(promise())
// const middleware = applyMiddleware(
//   promise(),
//   thunk,
//   // createLogger(logger)
// );

export default middleware;
