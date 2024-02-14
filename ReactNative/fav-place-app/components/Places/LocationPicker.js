import { View, StyleSheet, Alert, Image, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { OutlinedButton } from '../ui/OutlinedButton';
import { Colors } from '../../constants/colors';
import {
	getCurrentPositionAsync,
	useForegroundPermissions,
	PermissionStatus,
} from 'expo-location';
import { useEffect, useState } from 'react';
import {
	useNavigation,
	useRoute,
	useIsFocused,
} from '@react-navigation/native';
import { getMapPreview } from '../../util/location';

export const LocationPicker = ({ onPickLocation }) => {
	const [pickedLocation, setPickedLocation] = useState();
	const isFocused = useIsFocused();

	const [locationPermissionInformation, requestPermission] =
		useForegroundPermissions();

	const navigation = useNavigation();
	const route = useRoute();

	useEffect(() => {
		if (isFocused && route.params) {
			const mapPickedLocation = {
				lat: route.params.pickedLat,
				lng: route.params.pickedLng,
			};
			setPickedLocation(mapPickedLocation);
		}
	}, [route, isFocused]);

	useEffect(() => {
		onPickLocation(pickedLocation);
	}, [pickedLocation, onPickLocation]);

	const verifyPermissions = async () => {
		if (
			locationPermissionInformation.status === PermissionStatus.UNDETERMINED
		) {
			const permissionResponse = await requestPermission();
			return permissionResponse.granted;
		}

		if (locationPermissionInformation.status === PermissionStatus.DENIED) {
			Alert.alert(
				'Insufficient Permissions!',
				'You need to grant location permissions to use this app.'
			);

			return false;
		}

		return true;
	};

	const getLocationHandler = async () => {
		const hasPermission = await verifyPermissions();

		if (!hasPermission) {
			return;
		}

		const location = await getCurrentPositionAsync();
		setPickedLocation({
			lat: location.coords.latitude,
			lng: location.coords.longitude,
		});
	};

	const pickOnMapHandler = () => {
		navigation.navigate('Map');
	};

	let locationPreview = <Text>No location picked yet.</Text>;


	// use only with google API key
	// if (pickedLocation) {
	// 	locationPreview = (
	// 		<Image
	// 			style={styles.image}
	// 			source={{
	// 				uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
	// 			}}
	// 		/>
	// 	);
	// }

	if (pickedLocation) {
		locationPreview = (
			<MapView
				style={styles.image}
				initialRegion={{
					latitude: pickedLocation.lat,
					longitude: pickedLocation.lng,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}>
				<Marker
					title='Picked Location'
					coordinate={{
						latitude: pickedLocation.lat,
						longitude: pickedLocation.lng,
					}}
				/>
			</MapView>
		);
	}

	return (
		<View>
			<View style={styles.mapPreview}>{locationPreview}</View>
			<View style={styles.actions}>
				<OutlinedButton icon='location' onPress={getLocationHandler}>
					Locate User
				</OutlinedButton>
				<OutlinedButton icon='map' onPress={pickOnMapHandler}>
					Pick on Map
				</OutlinedButton>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mapPreview: {
		width: '100%',
		height: 200,
		marginVertical: 8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary100,
		borderRadius: 4,
		overflow: 'hidden',
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: '100%',
	},
});
