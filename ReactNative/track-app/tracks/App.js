import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Navigation } from './src/navigation/Navigation';

export default function App() {
	return (
		<AuthProvider>
			<SafeAreaProvider>
				<StatusBar style='auto' />
				<NavigationContainer>
					<Navigation />
				</NavigationContainer>
			</SafeAreaProvider>
		</AuthProvider>
	);
}

const styles = StyleSheet.create({});
