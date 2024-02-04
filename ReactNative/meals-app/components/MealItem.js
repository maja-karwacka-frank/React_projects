import {
	View,
	Pressable,
	Text,
	Image,
	StyleSheet,
	Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MealDetails } from './MealDetails';

export const MealItem = ({
	title,
	affordability,
	complexity,
	imageUrl,
	duration,
	id,
}) => {
	const navigation = useNavigation();

	const selectMealItemHanlder = () => {
		navigation.navigate('MealDetail', {
			mealId: id,
		});
	};

	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
				onPress={selectMealItemHanlder}>
				<View style={styles.innerContainer}>
					<View>
						<Image source={{ uri: imageUrl }} style={styles.image} />
						<Text style={styles.title}>{title}</Text>
					</View>
					<MealDetails
						duration={duration}
						complexity={complexity}
						affordability={affordability}
					/>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: 'hidden',
		backgroundColor: 'white',
		elevation: 4,
		shadowColor: 'black',
		shadowOpacity: 0.35,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},
	innerContainer: {
		borderRadius: 8,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: 200,
	},
	title: {
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
		margin: 8,
	},
	buttonPressed: {
		opacity: 0.5,
	},
});
