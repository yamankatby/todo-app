import axios, { AxiosRequestConfig } from 'axios';

const root = (path: string) => 'https://todo-app-backend-server.herokuapp.com'.concat(path);

export const register = async (name: string, email: string, password: string) => {
	const config: AxiosRequestConfig = {
		url: root('/users/register'),
		method: 'POST',
		data: {
			name,
			email,
			password,
		},
	};

	const response = await axios(config);
	return response.data.accessToken;
};

export const login = async (email: string, password: string) => {
	const config: AxiosRequestConfig = {
		url: root('/users/login'),
		method: 'POST',
		data: {
			email,
			password,
		},
	};

	const response = await axios(config);
	return response.data.accessToken;
};
