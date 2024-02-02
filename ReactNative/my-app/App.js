import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [courseGoals, setCourseGoals] = useState([]);

	const startAddGoalHanlder = () => {
		setModalIsVisible(true);
	};

	const endAddGoalHanlder = () => {
		setModalIsVisible(false);
	};

	const addGoalHandler = (enteredGoalText) => {
		setCourseGoals((prev) => [
			...prev,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
		setModalIsVisible(false);
	};

	const deleteGoalHandler = (goalId) => {
		setCourseGoals((prev) => {
			return prev.filter((goal) => goal.id !== goalId);
		});
	};

	return (
		<>
			<StatusBar style='light' />
			<View style={styles.appContainer}>
				<Button
					title='Add New Goal'
					color='#a065ec'
					onPress={startAddGoalHanlder}
				/>
				<GoalInput
					visible={modalIsVisible}
					onAddGoal={addGoalHandler}
					onCancel={endAddGoalHanlder}
				/>
				<View style={styles.goalsContainer}>
					<FlatList
						data={courseGoals}
						renderItem={(itemData) => (
							<GoalItem
								text={itemData.item.text}
								id={itemData.item.id}
								onDeleteItem={deleteGoalHandler}
							/>
						)}
						keyExtractor={(item) => item.id}
						alwaysBounceVertical={false}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
		backgroundColor: '#1e086a',
	},
	goalsContainer: {
		flex: 5,
	},
});
