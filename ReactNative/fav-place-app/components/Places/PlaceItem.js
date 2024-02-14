import { Image, View, Text, Pressable, StyleSheet } from 'react-native';

export const PlaceItem = ({ place, onSelect }) => {
	const { title, address, imageUri } = place;
	return (
		<Pressable onPress={onSelect}>
			<Image source={{ uri: imageUri }} />
			<View>
				<Text>{title}</Text>
				<Text>{address}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({});
