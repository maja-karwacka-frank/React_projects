import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
	const { state, signin, clearErrorMessage } = useContext(AuthContext);

	useEffect(() => {
		const listener = navigation.addListener('focus', () => {
			clearErrorMessage();
		});

		return listener
	}, [navigation]);

	return (
		<View style={styles.container}>
			<AuthForm
				headerText='Sign In to Your Account'
				errorMessage={state.errorMessage}
				onSubmit={signin}
				submitButtonText='Sign In'
			/>
			<NavLink
				text='Dont have an account? Sign up instead'
				routeName='Signup'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 200,
	},
});

export default SigninScreen;
