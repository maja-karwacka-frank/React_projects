import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AccountScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 48 }}>AccountScreen</Text>
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
