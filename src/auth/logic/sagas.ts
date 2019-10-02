import { call, put, select, takeLatest } from 'redux-saga/effects';

import { AppState } from '../../config/types';
import { ActionTypes } from './types';

import { login, register } from './api';
import { loginResult, registerResult } from './actions';


function* registerSaga() {
	try {
		const { name, email, password } = yield select((state: AppState) => state.auth);
		const accessToken = yield call(register, name, email, password);

		yield put(registerResult(false, accessToken));
	} catch (e) {
		yield put(registerResult(true));
	}
}

function* loginSaga() {
	try {
		const { email, password } = yield select((state: AppState) => state.auth);
		const accessToken = yield call(login, email, password);

		yield put(loginResult(false, accessToken));
	} catch (e) {
		yield put(loginResult(true));
	}
}

export default [
	takeLatest(ActionTypes.register, registerSaga),
	takeLatest(ActionTypes.login, loginSaga),
];
