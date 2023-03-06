import MeetupDetail from '@/components/meetups/MeetupDetail';

const MeetupDetails = () => {
	return (
		<MeetupDetail
			image='https://cdn.pixabay.com/photo/2017/12/03/17/23/fantasy-2995326_960_720.jpg'
			title='First Meetup'
			address='Some street 5, Some City'
			description='This is a first meetup'
		/>
	);
};

export const getStaticPaths = async () => {
	return {
        fallback: false,
		paths: [
			{
				params: {
					meetupId: 'm1',
				},
				params: {
					meetupId: 'm2',
				},
			},
		],
	};
};

export const getStaticProps = async (context) => {
	const meetupId = context.params.meetupId;

	return {
		props: {
			meetupData: {
				image:
					'https://cdn.pixabay.com/photo/2017/12/03/17/23/fantasy-2995326_960_720.jpg',
				id: meetupId,
				title: 'First Meetup',
				address: 'Some street 5, Some City',
				description: 'This is a first meetup',
			},
		},
	};
};

export default MeetupDetails;
