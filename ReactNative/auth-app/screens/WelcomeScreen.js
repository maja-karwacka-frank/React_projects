import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DB_URL } from '../config';
import { AuthContext } from '../store/auth-context';

const WelcomeScreen = () => {
	const [fetchedMessage, setFetchedMessage] = useState('');
	const authCtx = useContext(AuthContext);
	const token = authCtx.token;

	useEffect(() => {
		axios
			.get(DB_URL + token)
			.then((res) => {
				setFetchedMessage(res.data);
			})
			.catch((error) => console.log(error));
	}, [token]);
	return (
		<View style={styles.rootContainer}>
			<Text style={styles.title}>Welcome!</Text>
			<Text>You authenticated successfully!</Text>
			<Text>{fetchedMessage}</Text>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 32,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 8,
	},
});
