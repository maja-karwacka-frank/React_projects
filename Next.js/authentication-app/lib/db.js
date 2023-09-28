import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
	const client = await MongoClient.connect(
		'mongodb+srv://maja:tPsV3dRjkBUPSMpZ@cluster0.uecbfcv.mongodb.net/auth-demo?retryWrites=true&w=majority'
	);

    return client;
};
