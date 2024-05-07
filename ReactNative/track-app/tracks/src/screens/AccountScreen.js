import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 48 }}>AccountScreen</Text>
			<Spacer>
				<Button title='Sign Out' onPress={signout} />
			</Spacer>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 30,
	},
});

export default AccountScreen;
