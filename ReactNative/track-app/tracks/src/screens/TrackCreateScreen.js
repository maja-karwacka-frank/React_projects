import React, { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { requestForegroundPermissionsAsync } from 'expo-location';
import Map from '../components/Map';

const TrackCreateScreen = () => {
	const [err, setErr] = useState(null);
	const startWatching = async () => {
		try {
			const { granted } = await requestForegroundPermissionsAsync();
			if (!granted) {
				throw new Error('Location permission not granted');
			}
		} catch (e) {
			setErr(e);
		}
	};

	useEffect(() => {
		startWatching();
	}, []);

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
			<Text h2 style={{ textAlign: 'center' }}>
				Create a Track
			</Text>
			<Map />
			{err ? <Text>Please enable location services</Text> : null}
		</View>
	);
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
