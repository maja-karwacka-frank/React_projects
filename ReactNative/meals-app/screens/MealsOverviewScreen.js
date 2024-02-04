import { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
// import { useRoute } from '@react-navigation/native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import { MealItem } from '../components/MealItem';

const MealsOverviewScreen = ({ navigation, route }) => {
	// const route = useRoute();
	const catId = route.params.categoryId;

	const displayedMeals = MEALS.filter(
		(mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
	);

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;

		navigation.setOptions({
			title: categoryTitle,
		});
	}, [catId, navigation]);

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
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
