import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import TrackCreateScreen from '../screens/TrackCreateScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';
import AccountScreen from '../screens/AccountScreen';

const InternalStack = createStackNavigator();

const InternalStackNavigation = () => {
	return (
		<InternalStack.Navigator
		// screenOptions={}
		>
			<InternalStack.Screen
				name='TrackList'
				component={TrackListScreen}
				// options={}
			/>
			<InternalStack.Screen
				name='TrackDetail'
				component={TrackDetailScreen}
				// options={}
			/>
		</InternalStack.Navigator>
	);
};

const InternalTab = createMaterialBottomTabNavigator();

export const InternalTabNavigation = () => {
	return (
		<InternalTab.Navigator
		// screenOptions={}
		>
			<InternalTab.Screen
				name='TrackListFlow'
				component={InternalStackNavigation}
				// options={}
			/>
			<InternalTab.Screen
				name='TrackCreate'
				component={TrackCreateScreen}
				// options={}
			/>
			<InternalTab.Screen
				name='Account'
				component={AccountScreen}
				// options={}
			/>
		</InternalTab.Navigator>
	);
};
