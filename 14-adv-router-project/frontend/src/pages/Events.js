import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

export const EventsPage = () => {
	const events = useLoaderData();

	return <EventsList events={events} />;
};
