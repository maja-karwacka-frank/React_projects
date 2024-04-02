import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
	const friends = [
		{ name: 'Miecio', age: 5 },
		{ name: 'Halinka', age: 8 },
		{ name: 'Kotaro', age: 6 },
		{ name: 'Hana', age: 5 },
		{ name: 'Raymond', age: 10 },
	];

	return (
		<FlatList
			data={friends}
			keyExtractor={(friend) => friend.name}
			renderItem={({ item }) => {
				return (
					<Text style={styles.textStyle}>
						{item.name} - Age {item.age}
					</Text>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 10,
		borderStyle: 'solid',
		borderColor: 'black',
		borderWidth: 1,
        padding: 10,
        margin: 10,
	},
});

export default ListScreen;
