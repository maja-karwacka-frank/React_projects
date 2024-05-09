import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, View, StyleSheet } from 'react-native';

const TrackCreateScreen = () => {
	const insets = useSafeAreaInsets();
	return (
		<View
			style={{
				flex: 1,
				paddingTop: insets.top,
				paddingBottom: insets.bottom,
				paddingLeft: insets.left,
				paddingRight: insets.right,
			}}>
			<Text style={{ fontSize: 48, textAlign: 'center' }}>
				TrackCreate Screen
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
