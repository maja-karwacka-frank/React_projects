import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textOneStyle}>Child 1</Text>
			<Text style={styles.textTwoStyle}>Child 2</Text>
			<Text style={styles.textThreeStyle}>Child 3</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 1,
		borderColor: 'black',
	},
	textOneStyle: {
		borderWidth: 3,
		borderColor: 'red',
		...StyleSheet.absoluteFillObject,
	},
	textTwoStyle: {
		borderWidth: 3,
		borderColor: 'red',
	},
	textThreeStyle: {
		borderWidth: 3,
		borderColor: 'red',
	},
});

export default BoxScreen;
