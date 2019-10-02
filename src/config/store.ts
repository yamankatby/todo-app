import { applyMiddleware, compose, createStore, Dispatch, Middleware } from 'redux';
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { AppActionTypes, AppState } from './types';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewareList: Middleware[] = [sagaMiddleware];
if (__DEV__) {
	middlewareList.push(createLogger());
}

const enhancers = [applyMiddleware(...middlewareList)];
const initialState = {};
const persistConfig = { enhancers };
const str = createStore(reducers, initialState, compose(...enhancers));
const prst = persistStore(str, persistConfig as any);
sagaMiddleware.run(rootSaga);

export const store = str;
export const persistor = prst;

export const useDispatch = (): Dispatch<{ type: AppActionTypes, [key: string]: any }> => useReduxDispatch();
export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
