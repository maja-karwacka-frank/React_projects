import { useLayoutEffect } from 'react';
// import { useRoute } from '@react-navigation/native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import { MealsList } from '../components/MealList/MealsList';

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

	return <MealsList items={displayedMeals}/>
	
};

export default MealsOverviewScreen;


