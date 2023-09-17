import { useEffect, useState } from 'react';
import useSWR from 'swr';

const LastSalesPage = (props) => {
	const [sales, setSales] = useState(props.sales);
	// const [isLoading, setIsLoading] = useState(false);
	// useEffect(() => {
	// 	setIsLoading(true);
	// 	fetch('https://firebase-project-name/sales.json')
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			const transformedSales = [];
	// 			for (const key in data) {
	// 				transformedSales.push({
	// 					id: key,
	// 					username: data[key].username,
	// 					volume: data[key].volume,
	// 				});
	// 			}
	// 			setSales(transformedSales);
	// 			setIsLoading(false);
	// 		});
	// }, []);

	// if (isLoading) {
	// 	return <p>Loading...</p>;
	// }

	// if (!sales) {
	// 	return <p>No data yet...</p>;
	// }

	const { data, error } = useSWR('https://firebase-project-name/sales.json');

	useEffect(() => {
		if (data) {
			const transformedSales = [];
			for (const key in data) {
				transformedSales.push({
					id: key,
					username: data[key].username,
					volume: data[key].volume,
				});
			}
			setSales(transformedSales);
		}
	}, [data]);

	if (error) {
		return <p>Faild to load</p>;
	}
	if (!data && !sales) {
		return <p>Loading...</p>;
	}

	return (
		<ul>
			{sales.map((sale) => (
				<li key={sale.id}>
					{sale.username} - ${sale.volume}
				</li>
			))}
		</ul>
	);
};

export const getStaticProps = async () => {
	const response = await fetch('https://firebase-project-name/sales.json');
	const data = await response.json();

	const transformedSales = [];
	for (const key in data) {
		transformedSales.push({
			id: key,
			username: data[key].username,
			volume: data[key].volume,
		});
	}

	return { props: { sales: transformedSales }, revalidate: 10 };
};

export default LastSalesPage;

// useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))
