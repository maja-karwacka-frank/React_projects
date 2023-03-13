import React, { useCallback, useEffect, useMemo, useReducer } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';
import IngredientsList from './IngredientList';
import useHttp from '../../hooks/http';

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

function Ingredients() {
	const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
	const { isLoading, error, data, sendRequest, reqExtra, reqIdentifier } =
		useHttp();

	useEffect(() => {
		if (!isLoading && !error && reqIdentifier === 'REMOVE_INGREDIENT') {
			dispatch({ type: 'DELETE', id: reqExtra });
		} else if (!isLoading && !error && reqIdentifier === 'ADD_INGREDIENT') {
			dispatch({
				type: 'ADD',
				ingredient: { id: data.name, ...reqExtra },
			});
		}
	}, [data, reqExtra, reqIdentifier, isLoading, error]);

	const filteredIngredientsHandler = useCallback((filteredIngredients) => {
		dispatch({ type: 'SET', ingredients: filteredIngredients });
	}, []);

	const addIngredientHandler = useCallback(
		(ingredient) => {
			sendRequest(
				'https://react-project-b3b30-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json',
				'POST',
				JSON.stringify(ingredient),
				'ADD_INGREDIENT'
			);
		},
		[sendRequest]
	);

	const removeIngredientHandler = useCallback(
		(ingredientId) => {
			sendRequest(
				`https://react-project-b3b30-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${ingredientId}.json`,
				'DELETE',
				null,
				ingredientId,
				'REMOVE_INGREDIENT'
			);
		},
		[sendRequest]
	);

	const clearError = useCallback(() => {}, []);

	// useMemo przechowuje dowolne dane których nie chcemy odtwarzać przy każdym cyklu renderowania komponentu, ale tylko wtedy gdy tego potrzebujemy.
	const ingredientList = useMemo(() => {
		return (
			<IngredientsList
				ingredients={userIngredients}
				onRemoveItem={removeIngredientHandler}
			/>
		);
	}, [userIngredients, removeIngredientHandler]);

	return (
		<div className='App'>
			{error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
			<IngredientForm
				onAddIngredient={addIngredientHandler}
				loading={isLoading}
			/>
			<section>
				<Search onLoadIngredients={filteredIngredientsHandler} />
				{ingredientList}
			</section>
		</div>
	);
}

export default Ingredients;
