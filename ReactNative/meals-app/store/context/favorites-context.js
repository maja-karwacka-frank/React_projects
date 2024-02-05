import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
	ids: [],
	addFavorite: (id) => {},
	removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
	const [favoritesMealIds, setFavoritesMealIds] = useState([]);

	const addFavorite = (id) => {
		setFavoritesMealIds((prev) => [...prev, id]);
	};

	const removeFavorite = (id) => {
		setFavoritesMealIds((prev) => prev.filter((mealId) => mealId !== id));
	};

	const value = {
		ids: favoritesMealIds,
		addFavorite,
		removeFavorite,
	};

	return (
		<FavoritesContext.Provider value={value}>
			{children}
		</FavoritesContext.Provider>
	);
};

export default FavoritesContextProvider;
