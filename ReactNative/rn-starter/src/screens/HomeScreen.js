import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
	const { navigate } = navigation;
	return (
		<View>
			<Text style={styles.text}>Hello Miecio </Text>
			<Button
				title='Go to Components Demo'
				onPress={() => navigate('Components')}
			/>
			<Button title='Go to List Demo' onPress={() => navigate('List')} />
			<Button title='Go to Image Demo' onPress={() => navigate('Image')} />
			<Button title='Go to Counter Demo' onPress={() => navigate('Counter')} />
			<Button title='Go to Color Demo' onPress={() => navigate('Color')} />
			<Button title='Go to Square Demo' onPress={() => navigate('Square')} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		gap: 10,
	},
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
