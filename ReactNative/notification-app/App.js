import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

Notifications.setNotificationHandler({
	handleNotification: async () => {
		console.log('from setNotificationHandler');
		return {
			shouldShowAlert: true,
			shouldPlaySound: false,
			shouldSetBadge: false,
		};
	},
	handleError: (error) => {
		console.log('error: ', error);
	},
	handleSuccess: (success) => {
		console.log('success: ', success);
	},
});

export default function App() {
	useEffect(() => {
		const subscription1 = Notifications.addNotificationReceivedListener(
			(notification) => {
				console.log(notification.request.content.data);
			}
		);

		const subscription2 = Notifications.addNotificationResponseReceivedListener(
			(response) => {
				console.log('response: ', response);
			}
		);

		return () => {
			subscription1.remove();
			subscription2.remove();
		};
	}, []);

	Notifications.requestPermissionsAsync();

	const scheduleNotificationHandler = () => {
		Notifications.scheduleNotificationAsync({
			content: {
				title: 'My first local notification',
				body: 'This is the body of the notification we are sending!',
				data: { userName: 'Miecio' },
			},
			trigger: {
				seconds: 3,
			},
		});
	};

	return (
		<View style={styles.container}>
			<Button
				title='Schedule Notification'
				onPress={scheduleNotificationHandler}
			/>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
