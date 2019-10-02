import { State as AuthState } from '../auth/logic/types';

export interface AppState {
	auth: AuthState
}

export interface AppAction {
	type: string;
}

export interface AppResultAction extends AppAction {
	hasError: boolean,
}
