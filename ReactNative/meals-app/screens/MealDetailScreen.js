import 'react-native-gesture-handler';
import { useLayoutEffect } from 'react';
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { MealDetails } from '../components/MealDetails';
import { Subtitle } from '../components/MealDetail/Subtitle';
import { List } from '../components/MealDetail/List';
import { IconButton } from '../components/IconButton';

const MealDetailScreen = ({ route, navigation }) => {
	const { mealId } = route.params;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	const {
		title,
		imageUrl,
		duration,
		complexity,
		affordability,
		ingredients,
		steps,
	} = selectedMeal;

	const headerButtonPressHandler = () => {
		console.log('Pressed!');
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					icon='star'
					color='white'
					onPress={headerButtonPressHandler}
				/>
			),
		});
	}, [navigation, headerButtonPressHandler]);

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
