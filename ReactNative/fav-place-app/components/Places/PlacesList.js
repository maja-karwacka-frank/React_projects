import { FlatList, View, Text, StyleSheet } from 'react-native';
import { PlaceItem } from './PlaceItem';
import { Colors } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

export const PlacesList = ({ places }) => {

	const navigation = useNavigation();

	const selectPlaceHandler = (id) => {
		navigation.navigate('PlaceDetails', {
			placeId: id
		});
	}

	if (!places || places.length === 0) {
		return (
			<View style={styles.fallbackContainer}>
				<Text style={styles.fallbackText}>
					No places added yet - maybe start adding some? 😊
				</Text>
			</View>
		);
	}
	return (
		<FlatList
			style={styles.list}
			data={places}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => <PlaceItem place={item} onSelect={selectPlaceHandler} />}
		/>
	);
};

const styles = StyleSheet.create({
	list: {
		margin: 24,
	},
	fallbackContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
	fallbackText: {
		fontSize: 16,
		textAlign: 'center',
		color: Colors.primary200,
	},
});
