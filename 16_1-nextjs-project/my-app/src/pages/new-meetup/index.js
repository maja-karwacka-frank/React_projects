import NewMeetupForm from '@/components/meetups/NewMeetupForm';

const NewMeetupPages = () => {
	const addMeetupHandler = (enteredMeetupData) => {
		console.log(enteredMeetupData);
	};

	return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPages;
