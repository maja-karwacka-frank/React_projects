import 'react-native-gesture-handler';

import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style='light' />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: '#351401',
						},
						headerTintColor: 'white',
						contentStyle: {
							backgroundColor: '#3f2f25',
						},
					}}>
					<Stack.Screen
						name='MealsCategories'
						component={CategoriesScreen}
						options={{
							title: 'All Categories',
						}}
					/>
					<Stack.Screen
						name='MealsOverview'
						component={MealsOverviewScreen}
						// options={({ route, navigation }) => {
						// 	const { categoryId } = route.params;
						// 	return {
						// 		title: categoryId,
						// 	};
						// }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
