import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/events/results-title';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/ui/error-alert';
import { getFilteredEvents } from '@/helpers/api-util';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import useSWR from 'swr';

const FilteredEventsPage = (props) => {
	const [loadedEvents, setLoadedEvents] = useState();
	const router = useRouter();
	const filterData = router.query.slug;

	const { data, error } = useSWR(
		'https://nextjs-8841c-default-rtdb.europe-west1.firebasedatabase.app/events.json',
		(url) => fetch(url).then((res) => res.json())
	);
	console.log(data);

	useEffect(() => {
		if (data) {
			const events = [];

			for (const key in data) {
				events.push({
					id: key,
					...data[key],
				});
			}
			console.log(events);
			setLoadedEvents(events);
		}
	}, [data]);

	let pageHeadData = (
		<Head>
			<title>Filtered Events</title>
			<meta name='description' content='A list of filtered events' />
		</Head>
	);

	if (!loadedEvents) {
		return (
			<>
				{pageHeadData}
				<p className='center'>Loading...</p>
			</>
		);
	}

	const filteredYear = filterData[0];
	const filteredMonth = filterData[1];

	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	pageHeadData = (
		<Head>
			<title>Filtered Events</title>
			<meta
				name='description'
				content={`All events for ${numMonth}/${numYear}.`}
			/>
		</Head>
	);

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 2021 ||
		numMonth < 1 ||
		numMonth > 12 ||
		error
	) {
		return (
			<>
				{pageHeadData}
				<ErrorAlert>
					<p>Invalid filter. Please adjust your values!</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show All Events</Button>
				</div>
			</>
		);
	}

	const filteredEvents = loadedEvents.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === numYear &&
			eventDate.getMonth() === numMonth - 1
		);
	});

	// if (props.hasError) {
	// 	return (
	// 		<>
	// 			<ErrorAlert>
	// 				<p>Invalid filter. Please adjust your values!</p>
	// 			</ErrorAlert>
	// 			<div className='center'>
	// 				<Button link='/events'>Show All Events</Button>
	// 			</div>
	// 		</>
	// 	);
	// }

	// const filteredEvents = props.events;

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				{pageHeadData}
				<ErrorAlert>
					<p>No events found for the chosen filter!</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show All Events</Button>
				</div>
			</>
		);
	}

	// const date = new Date(props.date.year, props.date.month - 1);
	const date = new Date(numYear, numMonth - 1);

	return (
		<>
			{pageHeadData}
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</>
	);
};

// export const getServerSideProps = async (context) => {
// 	const { params } = context;

// 	const filterData = params.slug;

// 	const filteredYear = filterData[0];
// 	const filteredMonth = filterData[1];

// 	const numYear = +filteredYear;
// 	const numMonth = +filteredMonth;

// 	if (
// 		isNaN(numYear) ||
// 		isNaN(numMonth) ||
// 		numYear > 2030 ||
// 		numYear < 2021 ||
// 		numMonth < 1 ||
// 		numMonth > 12 ||
// 	) {
// 		return {
// 			props: {
// 				hasError: true,
// 			},
// 			// notFound: true,
// 			// redirect: {
// 			// 	destination: '/error',
// 			// },
// 		};
// 	}

// 	const filteredEvents = await getFilteredEvents({
// 		year: numYear,
// 		month: numMonth,
// 	});
// 	return {
// 		props: {
// 			events: filteredEvents,
// 			date: {
// 				year: numYear,
// 				month: numMonth,
// 			},
// 		},
// 	};
// };

export default FilteredEventsPage;
