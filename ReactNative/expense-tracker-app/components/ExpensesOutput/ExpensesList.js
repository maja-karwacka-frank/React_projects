import { FlatList, Text, StyleSheet } from 'react-native';
import { ExpenseItem } from './ExpenseItem';

const renderExpenseItem = (itemData) => {
	return <ExpenseItem {...itemData.item} />;
};

export const ExpensesList = ({ expenses }) => {
	return (
		<FlatList
			data={expenses}
			keyExtractor={(item) => item.id}
			renderItem={renderExpenseItem}
		/>
	);
};

const styles = StyleSheet.create({});
