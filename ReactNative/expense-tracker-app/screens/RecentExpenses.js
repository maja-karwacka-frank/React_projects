import { useContext, useEffect, useState } from 'react';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';
import { LoadingOverlay } from '../components/ui/LoadingOverlay';
import { ErrorOverlay } from '../components/ui/ErrorOverlay';

const RecentExpenses = () => {
	const [isFetching, setIsFetching] = useState(true);
	const [error, setError] = useState();
	const expensesCtx = useContext(ExpensesContext);

	const getExpenses = async () => {
		try {
			const expenses = await fetchExpenses();
			expensesCtx.setExpenses(expenses);
		} catch (error) {
			setError('Could not fetch expenses!');
		}
		setIsFetching(false);
	};

	useEffect(() => {
		getExpenses();
	}, []);

	if (isFetching) {
		return <LoadingOverlay />;
	}

	if (error && !isFetching) {
		return <ErrorOverlay message={error} />;
	}

	const recentExpenses = expensesCtx.expenses.filter((expense) => {
		const today = new Date();
		const date7DaysAgo = getDateMinusDays(today, 7);
		return expense.date >= date7DaysAgo && expense.date <= today;
	});

	return (
		<ExpensesOutput
			expenses={recentExpenses}
			expensesPeriod='Last 7 days'
			fallbackText='No expenses registered for the last 7 days.'
		/>
	);
};

export default RecentExpenses;
