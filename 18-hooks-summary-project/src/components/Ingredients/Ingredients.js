import React, { useEffect, useState } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientsList from './IngredientList';

function Ingredients() {
	const [userIngredients, setUserIngredients] = useState([]);

	useEffect(() => {
		fetch(
			'https://react-project-b3b30-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json'
		)
			.then((res) => res.json())
			.then((resData) => {
				const loadedIngredients = [];
				for (const key in resData) {
					loadedIngredients.push({
						id: key,
						title: resData[key].title,
						amount: resData[key].amount,
					});
				}
				setUserIngredients(loadedIngredients);
			});
	}, []);

	const addIngredientHandler = (ingredient) => {
		fetch(
			'https://react-project-b3b30-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json',
			{
				method: 'POST',
				body: JSON.stringify(ingredient),
				headers: { 'Content-Type': 'application/json' },
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((responseData) => {
				setUserIngredients((prevIngredients) => [
					...prevIngredients,
					{ id: responseData.name, ...ingredient },
				]);
			});
	};

	const removeIngredientHandler = (ingradientId) => {
		setUserIngredients((prevIngredients) =>
			prevIngredients.filter((ingredient) => ingredient.id !== ingradientId)
		);
	};

	return (
		<div className='App'>
			<IngredientForm onAddIngredient={addIngredientHandler} />

			<section>
				<Search />
				<IngredientsList
					ingredients={userIngredients}
					onRemoveItem={removeIngredientHandler}
				/>
			</section>
		</div>
	);
}

export default Ingredients;
