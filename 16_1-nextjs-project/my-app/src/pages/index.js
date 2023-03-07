import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '@/components/meetups/MeetupList';
import { Fragment } from 'react';

const HomePage = (props) => {
	return (
		<Fragment>
			<Head>
				<title>React Meetups</title>
				<meta
					name='description'
					content='Browse a huge list of highly active React meetups!'
				/>
			</Head>
			<MeetupList meetups={props.meetups} />
		</Fragment>
	);
};

// strona wstępnie generowana dla każdego requestu
// export const getServerSideProps = async (context) => {
// 	const req = context.req;
// 	const res = context.res;

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// };

export const getStaticProps = async () => {
	const client = await MongoClient.connect(
		'mongodb+srv://maja:EPUCk5bHyF8dzhSP@cluster0.uecbfcv.mongodb.net/meetups?retryWrites=true&w=majority'
	);

	const db = client.db();

	const meetupsCollection = db.collection('meetups');

	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 1,
	};
};

export default HomePage;
