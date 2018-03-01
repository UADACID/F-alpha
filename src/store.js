import { createStore, compose,  applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { createLogger } from 'redux-logger';

import middleware from './middlewares';

import { appReducer } from './reducers'

const config = {
    key: 'root',
    storage,
    //debug: true //to get useful logging
};

if(__DEV__){ middleware.push(createLogger()); }
const reducers = persistCombineReducers(config, appReducer);
const enhancers = [applyMiddleware(...middleware)];
const persistConfig = { enhancers };

const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
    //console.log(store.getState());
});
const configureStore = () => {
    return { persistor, store };
}

export default configureStore;
