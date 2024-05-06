import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';

const ExternalStack = createStackNavigator();

export const ExternalNavigation = () => {
	return (
		<ExternalStack.Navigator
		// screenOptions={}
		>
			<ExternalStack.Screen
				name='Signup'
				component={SignupScreen}
				// options={}
			/>
			<ExternalStack.Screen
				name='Signin'
				component={SigninScreen}
				// options={}
			/>
		</ExternalStack.Navigator>
	);
};
