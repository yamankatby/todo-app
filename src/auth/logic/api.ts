import axios, { AxiosRequestConfig } from 'axios';

export const register = (name: string, email: string, password: string) => {
	const config: AxiosRequestConfig = {
		method: 'POST',
		data: {
			name,
			email,
			password,
		},
	};
	return axios(config);
};

export const login = (email: string, password: string) => {
	const config: AxiosRequestConfig = {
		method: 'POST',
		data: {
			email,
			password,
		},
	};
	return axios(config);
};
