import { combineReducers, Reducer } from 'redux';
import { AppAction, AppState } from './types';

import authReducer from '../auth/logic/reducers';

const reducers: Reducer<AppState, AppAction> = combineReducers({
	auth: authReducer,
});

export default reducers;
