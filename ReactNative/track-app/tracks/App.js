import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { InternalTabNavigation } from './src/navigation/InternalNavigation';
import { ExternalNavigation } from './src/navigation/ExternalNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	const isUser = true;
	return (
		<SafeAreaProvider>
			<StatusBar style='auto' />
			<NavigationContainer>
				{isUser ? <InternalTabNavigation /> : <ExternalNavigation />}
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({});
