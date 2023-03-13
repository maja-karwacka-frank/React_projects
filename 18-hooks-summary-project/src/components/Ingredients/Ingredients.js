import React, { useCallback, useEffect, useReducer } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';
import IngredientsList from './IngredientList';

const ingredientReducer = (currentIngredients, action) => {
	switch (action.type) {
		case 'SET':
			return action.ingredients;
		case 'ADD':
			return [...currentIngredients, action.ingredient];
		case 'DELETE':
			return currentIngredients.filter((ing) => ing.id !== action.id);
		default:
			throw new Error('Should not get there!');
	}
};

const httpReducer = (curHttpState, action) => {
	switch (action.type) {
		case 'SEND':
			return { loading: true, error: null };
		case 'RESPONSE':
			return { ...curHttpState, loading: false };
		case 'ERROR':
			return { loading: false, error: action.errorMessage };
		case 'CLEAR':
			return { ...curHttpState, error: null };
		default:
			throw new Error('Should not be reached');
	}
};

function Ingredients() {
	const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
	const [httpState, dispachHttp] = useReducer(httpReducer, {
		loading: false,
		errror: null,
	});
	// const [userIngredients, setUserIngredients] = useState([]);
	// const [isLoading, setIsLoading] = useState(false);
	// const [error, setError] = useState();

	useEffect(() => {
		console.log(userIngredients);
	}, [userIngredients]);

	const filteredIngredientsHandler = useCallback((filteredIngredients) => {
		// setUserIngredients(filteredIngredients);
		dispatch({ type: 'SET', ingredients: filteredIngredients });
	}, []);

	const addIngredientHandler = (ingredient) => {
		// setIsLoading(true);
		dispachHttp({ type: 'SEND' });
		fetch(
			'https://react-project-b3b30-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json',
			{
				method: 'POST',
				body: JSON.stringify(ingredient),
				headers: { 'Content-Type': 'application/json' },
			}
		)
			.then((response) => {
				// setIsLoading(false);
				dispachHttp({ type: 'RESPONSE' });
				return response.json();
			})
			.then((responseData) => {
				// setUserIngredients((prevIngredients) => [
				// 	...prevIngredients,
				// 	{ id: responseData.name, ...ingredient },
				// ]);
				dispatch({
					type: 'ADD',
					ingredient: { id: responseData.name, ...ingredient },
				});
			});
	};

	const removeIngredientHandler = (ingredientId) => {
		// setIsLoading(true);
		dispachHttp({ type: 'SEND' });
		fetch(
			`https://react-project-b3b30-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${ingredientId}.json`,
			{
				method: 'DELETE',
			}
		)
			.then((response) => {
				// setIsLoading(false);
				dispachHttp({ type: 'RESPONSE' });
				// setUserIngredients((prevIngredients) =>
				// 	prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
				// );
				dispatch({ type: 'DELETE', id: ingredientId });
			})
			.catch((error) => {
				dispachHttp({ type: 'ERROR', errorMessage: 'Something went wrong!' });
				// setError('Something went wrong!');
				// setIsLoading(false);
			});
	};

	const clearError = () => {
		dispachHttp({ type: 'CLEAR' });
		// setError(null);
	};

	return (
		<div className='App'>
			{httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}
			<IngredientForm
				onAddIngredient={addIngredientHandler}
				loading={httpState.loading}
			/>
			<section>
				<Search onLoadIngredients={filteredIngredientsHandler} />
				<IngredientsList
					ingredients={userIngredients}
					onRemoveItem={removeIngredientHandler}
				/>
			</section>
		</div>
	);
}

export default Ingredients;
