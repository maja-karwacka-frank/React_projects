import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';

const Stack = createStackNavigator();

export default function App() {
	return (
		<>
			<Provider>
				<StatusBar style='auto' />
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName='Index'
						screenOptions={{
							title: 'Blogs',
						}}>
						<Stack.Screen name='Index' component={IndexScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		</>
	);
}

const styles = StyleSheet.create({});
