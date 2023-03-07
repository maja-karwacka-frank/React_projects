import { MongoClient } from 'mongodb';

import MeetupList from '@/components/meetups/MeetupList';

const HomePage = (props) => {
	return <MeetupList meetups={props.meetups} />;
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
