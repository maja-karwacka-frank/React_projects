import React, { useState, useCallback, useEffect } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';
import IngredientsList from './IngredientList';

function Ingredients() {
	const [userIngredients, setUserIngredients] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	useEffect(() => {
		console.log(userIngredients);
	}, [userIngredients]);

	const filteredIngredientsHandler = useCallback((filteredIngredients) => {
		setUserIngredients(filteredIngredients);
	}, []);

	const addIngredientHandler = (ingredient) => {
		setIsLoading(true);
		fetch(
			'https://react-project-b3b30-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json',
			{
				method: 'POST',
				body: JSON.stringify(ingredient),
				headers: { 'Content-Type': 'application/json' },
			}
		)
			.then((response) => {
				setIsLoading(false);
				return response.json();
			})
			.then((responseData) => {
				setUserIngredients((prevIngredients) => [
					...prevIngredients,
					{ id: responseData.name, ...ingredient },
				]);
			});
	};

	const removeIngredientHandler = (ingredientId) => {
		setIsLoading(true);
		fetch(
			`https://react-project-b3b30-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${ingredientId}.json`,
			{
				method: 'DELETE',
			}
		)
			.then((response) => {
				setIsLoading(false);
				setUserIngredients((prevIngredients) =>
					prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
				);
			})
			.catch((error) => {
				setError('Something went wrong!');
				setIsLoading(false);
			});
	};

	const clearError = () => {
		setError(null);
	};

	return (
		<div className='App'>
			{error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
			<IngredientForm
				onAddIngredient={addIngredientHandler}
				loading={isLoading}
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
