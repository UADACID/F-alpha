import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import logger, { createLogger } from 'redux-logger';

const middleware = [];

middleware.push(thunk)
middleware.push(promise())

export default middleware;
