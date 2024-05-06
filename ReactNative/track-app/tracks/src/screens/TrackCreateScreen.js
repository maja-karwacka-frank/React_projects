import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TrackCreateScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 48 }}>TrackCreateScreen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 30
	}
});

export default TrackCreateScreen;
