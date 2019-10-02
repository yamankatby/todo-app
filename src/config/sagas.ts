import { all } from 'redux-saga/effects';
import authSagas from '../auth/logic/sagas';

export default function* () {
	yield all([
		...authSagas,
	]);
}
