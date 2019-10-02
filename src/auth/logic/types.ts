import { AppAction, AppResultAction } from '../../config/types';

export enum ActionTypes {
	change_name = 'AUTH__CHANGE_NAME',
	change_email = 'AUTH__CHANGE_EMAIL',
	change_password = 'AUTH__CHANGE_PASSWORD',

	register = 'AUTH__REGISTER',
	register_result = 'AUTH__REGISTER_RESULT',

	login = 'AUTH__LOGIN',
	login_result = 'AUTH__LOGIN_RESULT',
}

export interface ChangeNameAction extends AppAction {
	type: ActionTypes.change_name;
	name: string;
}

export interface ChangeEmailAction extends AppAction {
	type: ActionTypes.change_email;
	email: string;
}

export interface ChangePasswordAction extends AppAction {
	type: ActionTypes.change_password;
	password: string;
}

export interface RegisterResultAction extends AppResultAction {
	type: ActionTypes.register_result;
	accessToken?: string;
}

export interface LoginResultAction extends AppResultAction {
	type: ActionTypes.login_result;
	accessToken?: string;
}

export type Action =
	& AppAction
	& AppResultAction
	& ChangeNameAction
	& ChangeEmailAction
	& ChangePasswordAction
	& RegisterResultAction
	& LoginResultAction;

export interface State {
	name: string;
	email: string;
	password: string;

	accessToken: string;
}
