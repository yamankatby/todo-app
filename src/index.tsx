import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './config/store';

import Register from './auth/views/Register';

import 'axios-response-logger';

const App = () => {
	useEffect(() => {
		persistor.dispatch({ type: 'persist/REHYDRATE', key: 'RNTodoApp' });
	}, []);

	return (
		<PersistGate persistor={persistor}>
			<Register />
		</PersistGate>

	);
};

export default () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};
