import { View, StyleSheet, FlatList } from 'react-native';
import { MealItem } from './MealItem';

export const MealsList = ({items}) => {
	const renderMealItem = (itemData) => {
		const { title, imageUrl, affordability, complexity, duration, id } =
			itemData.item;

		const mealItemProps = {
			id,
			title,
			imageUrl,
			affordability,
			complexity,
			duration,
		};
		return <MealItem {...mealItemProps} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={items}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
