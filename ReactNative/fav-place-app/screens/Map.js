import MapView, { Marker } from 'react-native-maps';
import { Alert, StyleSheet } from 'react-native';
import { useCallback, useLayoutEffect, useState } from 'react';
import { IconButton } from '../components/ui/IconButton';

const Map = ({ navigation, route }) => {
	const initailLocation = route.params && {
		lat: route.params.initialLat,
		lng: route.params.initialLng,
	};

	const [selectedLocation, setSelectedLocation] = useState(initailLocation);

	const region = {
		latitude: initailLocation ? initailLocation.lat : 37.78,
		longitude: initailLocation ? initailLocation.lng : -122.43,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	};

	const selectLocationHandler = (event) => {
		if (initailLocation) {
			return;
		}
		const lat = event.nativeEvent.coordinate.latitude;
		const lng = event.nativeEvent.coordinate.longitude;

		setSelectedLocation({
			lat,
			lng,
		});
	};

	const savePickedLocationHandler = useCallback(() => {
		if (!selectedLocation) {
			Alert.alert(
				'No location picked!',
				'You have to pick a location (by tapping on the map) first'
			);
			return;
		}

		navigation.navigate('AddPlace', {
			pickedLat: selectedLocation.lat,
			pickedLng: selectedLocation.lng,
		});
	}, [navigation, selectedLocation]);

	useLayoutEffect(() => {
		if (initailLocation) {
			return;
		}
		navigation.setOptions({
			headerRight: ({ tintColor }) => (
				<IconButton
					icon='save'
					size={24}
					color={tintColor}
					onPress={savePickedLocationHandler}
				/>
			),
		});
	}, [navigation, savePickedLocationHandler, initailLocation]);

	return (
		<MapView
			initialRegion={region}
			style={styles.map}
			onPress={selectLocationHandler}>
			{selectedLocation && (
				<Marker
					title='Picked Location'
					coordinate={{
						latitude: selectedLocation.lat,
						longitude: selectedLocation.lng,
					}}
				/>
			)}
		</MapView>
	);
};

export default Map;

const styles = StyleSheet.create({
	map: {
		flex: 1,
	},
});
