import MeetupList from '@/components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A First Meetup',
		image:
			'https://cdn.pixabay.com/photo/2017/12/03/17/23/fantasy-2995326_960_720.jpg',
		address: 'Some address',
		description: 'This is a first meetup!',
	},
	{
		id: 'm2',
		title: 'A Second Meetup',
		image:
			'https://cdn.pixabay.com/photo/2017/12/03/17/23/fantasy-2995326_960_720.jpg',
		address: 'Some address',
		description: 'This is a second meetup!',
	},
];

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
	return {
		props: {
			meetups: DUMMY_MEETUPS,
		},
		revalidate: 1,
	};
};

export default HomePage;
