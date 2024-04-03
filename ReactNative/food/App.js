import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './src/screens/SearchScreen';

const Stack = createStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style='auto' />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Search'
					screenOptions={{
						title: 'Business Search',
					}}>
					<Stack.Screen name='Search' component={SearchScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
