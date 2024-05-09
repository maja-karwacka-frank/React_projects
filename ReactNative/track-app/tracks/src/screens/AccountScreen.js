import React, { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);
	const insets = useSafeAreaInsets();
	return (
		<View
			style={{
				flex: 1,
				paddingTop: insets.top,
				paddingBottom: insets.bottom,
				paddingLeft: insets.left,
				paddingRight: insets.right,
			}}>
			<Text style={{ fontSize: 48, textAlign: 'center' }}>AccountScreen</Text>
			<Spacer>
				<Button title='Sign Out' onPress={signout} />
			</Spacer>
		</View>
	);
};

const styles = StyleSheet.create({});

export default AccountScreen;
