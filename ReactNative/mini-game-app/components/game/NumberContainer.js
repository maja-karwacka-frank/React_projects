import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constans/colors';

export const NumberContainer = ({ children }) => {
	return (
		<View style={styles.constainer}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	constainer: {
		borderWidth: 4,
		borderColor: Colors.accent500,
		margin: 25,
		padding: 24,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	numberText: {
		color: Colors.accent500,
		fontSize: 36,
		fontFamily: 'open-sans-bold',
	},
});
