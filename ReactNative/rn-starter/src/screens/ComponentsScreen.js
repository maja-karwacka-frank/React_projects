import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const name = 'Miecio';
	return (
		<View>
			<Text style={styles.heading}>Getting started with React Native!</Text>
			<Text style={styles.text}>My name is {name} </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	heading: {
		fontSize: 45,
	},
	text: {
		fontSize: 20,
	},
});

export default ComponentsScreen;
