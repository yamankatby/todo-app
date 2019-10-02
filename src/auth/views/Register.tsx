import React, { useCallback } from 'react';
import { Button, TextInput, View } from 'react-native';

import { useDispatch } from '../../config/store';
import { changeEmail, changeName, changePassword, register } from '../logic/actions';

const Register = () => {
	const dispatch = useDispatch();

	const onChangeName = useCallback((name: string) => {
		dispatch(changeName(name));
	}, [dispatch]);

	const onChangeEmail = useCallback((email: string) => {
		dispatch(changeEmail(email));
	}, [dispatch]);

	const onChangePassword = useCallback((password: string) => {
		dispatch(changePassword(password));
	}, [dispatch]);

	const onRegisterTouch = useCallback(() => {
		dispatch(register());
	}, [dispatch]);

	return (
		<View>
			<TextInput style={{ marginTop: 80 }} placeholder='Name' onChangeText={onChangeName} />
			<TextInput placeholder='Email' onChangeText={onChangeEmail} />
			<TextInput placeholder='Password' onChangeText={onChangePassword} />
			<Button title='Login' onPress={onRegisterTouch} />
		</View>
	);
};

export default Register;
