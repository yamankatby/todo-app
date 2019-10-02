import { Action, ActionTypes, State } from './types';

const initialState: State = {
	name: '',
	email: '',
	password: '',

	accessToken: '',
};

export default (state = initialState, action: Action): State => {
	switch (action.type) {
		case ActionTypes.change_name:
			return {
				...state,
				name: action.name,
			};
		case ActionTypes.change_email:
			return {
				...state,
				email: action.email,
			};
		case ActionTypes.change_password:
			return {
				...state,
				password: action.password,
			};
		case ActionTypes.register_result:
		case ActionTypes.login_result:
			if (action.hasError) return state;
			return {
				...state,
				accessToken: action.accessToken!,
			};

		default:
			return state;
	}
}
