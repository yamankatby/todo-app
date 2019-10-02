import { Action as ReduxAction } from 'redux';
import { ActionTypes as AuthActionTypes, State as AuthState } from '../auth/logic/types';

export type AppActionTypes = AuthActionTypes;

export interface AppState {
	auth: AuthState
}

export interface AppAction extends ReduxAction<AppActionTypes> {
}

export interface AppResultAction extends AppAction {
	hasError: boolean,
}
