import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import ResolveAuthScreen from '../screens/ResolveAuthScreen';

const ExternalStack = createStackNavigator();

export const ExternalNavigation = () => {
	return (
		<ExternalStack.Navigator
		// screenOptions={}
		>
			<ExternalStack.Screen
				name='ResolveAuth'
				component={ResolveAuthScreen}
				options={{
					headerShown: false,
				}}
			/>
			<ExternalStack.Screen
				name='Signup'
				component={SignupScreen}
				options={{
					headerShown: false,
				}}
			/>
			<ExternalStack.Screen
				name='Signin'
				component={SigninScreen}
				options={{
					headerShown: false,
				}}
			/>
		</ExternalStack.Navigator>
	);
};
