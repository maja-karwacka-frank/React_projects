import 'react-native-gesture-handler';
import { useContext, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { MealDetails } from '../components/MealDetails';
import { Subtitle } from '../components/MealDetail/Subtitle';
import { List } from '../components/MealDetail/List';
import { IconButton } from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

const MealDetailScreen = ({ route, navigation }) => {
	// const favoriteMealsCtx = useContext(FavoritesContext);
	const { mealId } = route.params;

	const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
	const dispatch = useDispatch();

	// const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	const mealIsFavorite = favoriteMealIds.includes(mealId);


	const {
		title,
		imageUrl,
		duration,
		complexity,
		affordability,
		ingredients,
		steps,
	} = selectedMeal;

	const changeFavoriteStatusHandler = () => {
		if (mealIsFavorite) {
			// favoriteMealsCtx.removeFavorite(mealId);
			dispatch(removeFavorite({ id: mealId }));
		} else {
			// favoriteMealsCtx.addFavorite(mealId);
			dispatch(addFavorite({ id: mealId }));
		}
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					icon={mealIsFavorite ? 'star' : 'star-outline'}
					color='white'
					onPress={changeFavoriteStatusHandler}
				/>
			),
		});
	}, [navigation, changeFavoriteStatusHandler]);

	return (
		<ScrollView style={styles.rootContainer}>
			<Image source={{ uri: imageUrl }} style={styles.image} />
			<Text style={styles.title}>{title}</Text>
			<MealDetails
				duration={duration}
				complexity={complexity}
				affordability={affordability}
				textStyle={styles.detailText}
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={ingredients} />

					<Subtitle>Steps</Subtitle>
					<List data={steps} />
				</View>
			</View>
		</ScrollView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 32,
	},
	image: {
		width: '100%',
		height: 350,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		margin: 8,
		textAlign: 'center',
		color: 'white',
	},
	detailText: {
		color: 'white',
	},
	listOuterContainer: {
		alignItems: 'center',
	},
	listContainer: {
		width: '80%',
	},
});
