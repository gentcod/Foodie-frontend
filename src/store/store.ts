import { Middleware } from "redux-saga";
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from "./root-saga";
import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  process.env.NODE_ENV !== 'production' && logger, 
  sagaMiddleware
].filter((middleware): middleware is Middleware  => Boolean(middleware));

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);