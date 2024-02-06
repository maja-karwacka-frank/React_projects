import { View, StyleSheet } from 'react-native';
import { ExpensesSummary } from './ExpensesSummary';
import { ExpensesList } from './ExpensesList';
import { GlobalStyles } from '../../constans/styles';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		description: 'Toilet Paper',
		amount: 94.12,
		date: new Date('2024-02-06'),
	},
	{
		id: 'e2',
		description: 'New TV',
		amount: 799.49,
		date: new Date('2024-02-01'),
	},
	{
		id: 'e3',
		description: 'Car Insurance',
		amount: 294.67,
		date: new Date('2024-01-20'),
	},
	{
		id: 'e4',
		description: 'New Desk (Wooden)',
		amount: 450,
		date: new Date('2024-02-02'),
	},
	{
		id: 'e5',
		description: 'New Desk (Wooden)',
		amount: 450,
		date: new Date('2024-02-02'),
	},
	{
		id: 'e6',
		description: 'New Desk (Wooden)',
		amount: 450,
		date: new Date('2024-02-02'),
	},
	{
		id: 'e7',
		description: 'New Desk (Wooden)',
		amount: 450,
		date: new Date('2024-02-02'),
	},
	{
		id: 'e8',
		description: 'New Desk (Wooden)',
		amount: 450,
		date: new Date('2024-02-02'),
	},
	{
		id: 'e9',
		description: 'New Desk (Wooden)',
		amount: 450,
		date: new Date('2024-02-02'),
	},
	{
		id: 'e10',
		description: 'New Desk (Wooden)',
		amount: 450,
		date: new Date('2024-02-02'),
	},
	{
		id: 'e11',
		description: 'New Desk (Wooden)',
		amount: 450,
		date: new Date('2024-02-02'),
	},
	{
		id: 'e12',
		description: 'New Desk (Wooden)',
		amount: 450,
		date: new Date('2024-02-02'),
	},
	{
		id: 'e13',
		description: 'New Desk (Wooden)',
		amount: 450,
		date: new Date('2024-02-02'),
	},
	{
		id: 'e14',
		description: 'New Desk (Wooden)',
		amount: 450,
		date: new Date('2024-02-02'),
	},
	{
		id: 'e15',
		description: 'New Desk (Wooden)',
		amount: 450,
		date: new Date('2024-02-02'),
	},
	{
		id: 'e16',
		description: 'New Desk (Wooden)',
		amount: 450,
		date: new Date('2024-02-02'),
	},
	{
		id: 'e17',
		description: 'New Desk (Wooden)',
		amount: 450,
		date: new Date('2024-02-02'),
	},
];

export const ExpensesOutput = ({ expenses, expensesPeriod }) => {
	return (
		<View style={styles.container}>
			<ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
			<ExpensesList expenses={DUMMY_EXPENSES} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		paddingTop: 24,
		paddingBottom: 0,
		backgroundColor: GlobalStyles.colors.primary700,
	},
});
