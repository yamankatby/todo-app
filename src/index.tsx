import React from 'react';
import { Provider } from 'react-redux';

import { store } from './config/store';
import Register from './auth/views/Register';

import 'axios-response-logger';

const index = () => {
	return (
		<Provider store={store}>
			<Register />
		</Provider>
	);
};

export default index;
