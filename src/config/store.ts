import { applyMiddleware, combineReducers, compose, createStore, Dispatch } from 'redux';
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import reduxLoggerMiddleware from 'redux-logger';

import { AppActionTypes, AppState } from './types';

import authReducer from '../auth/logic/reducers';
import authSagas from '../auth/logic/sagas';

const rootReducer = combineReducers({
	auth: authReducer,
});
const rootSaga = function* () {
	yield all([
		...authSagas,
	]);
};

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, {}, compose(applyMiddleware(sagaMiddleware, reduxLoggerMiddleware)));

sagaMiddleware.run(rootSaga);

export const useDispatch = (): Dispatch<{ type: AppActionTypes, [key: string]: any }> => useReduxDispatch();
export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
