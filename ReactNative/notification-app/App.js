import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, View, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { useEffect } from 'react';

Notifications.setNotificationHandler({
	handleNotification: async () => {
		return {
			shouldShowAlert: true,
			shouldPlaySound: false,
			shouldSetBadge: false,
		};
	},
});

export default function App() {
	useEffect(() => {
		const configurePushNotifications = async () => {
			const { status } = await Notifications.getPermissionsAsync();
			let finalStatus = status;

			if (status !== 'granted') {
				const { status } = await Notifications.requestPermissionsAsync();
				finalStatus = status;
			}
			if (finalStatus !== 'granted') {
				Alert.alert(
					'Permission required',
					'Push notifications need the appropriate permissions.'
				);
				return;
			}

			const pushTokenData = await Notifications.getExpoPushTokenAsync({
				projectId: Constants.expoConfig.extra.eas.projectId,
			});
			console.log({ pushTokenData });

			if (Platform.OS === 'android') {
				Notifications.setNotificationChannelAsync('default', {
					name: 'default',
					importance: Notifications.AndroidImportance.DEFAULT,
				});
			}
		};

		configurePushNotifications();
	}, []);

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
