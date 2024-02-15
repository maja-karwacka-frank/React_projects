import { useEffect, useState } from 'react';
import { PlacesList } from '../components/Places/PlacesList';
import { useIsFocused } from '@react-navigation/native';
import { fetchPlaces } from '../util/database';

const AllPlaces = () => {
	const [loadedPlaces, setLoadedPlaces] = useState([]);
	const isFocused = useIsFocused();

	const loadPlaces = async () => {
		const places = await fetchPlaces();
		setLoadedPlaces(places);
	};

	useEffect(() => {
		if (isFocused) {
			loadPlaces();
		}
	}, [isFocused]);
	return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;
