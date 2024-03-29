import { connectDatabase, insertDocument } from '../../helpers/db-util';

// const connectDatabase = async () => {
// 	const client = await MongoClient.connect(
// 		'mongodb+srv://maja:tPsV3dRjkBUPSMpZ@cluster0.uecbfcv.mongodb.net/events?retryWrites=true&w=majority'
// 	);

// 	return client;
// };

// const insertDocument = async (client, document) => {
// 	const db = client.db();
// 	await db.collection('newsletter').insertOne(document);
// };

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const userEmail = req.body.email;

		if (!userEmail || !userEmail.includes('@')) {
			res.status(422).json({ message: 'Invalid email address.' });
			return;
		}

		let client;

		try {
			client = await connectDatabase();
		} catch (error) {
			res.status(500).json({ message: 'Connecting to the database failed!' });
			return;
		}

		try {
			await insertDocument(client, 'newsletter', { email: userEmail });
			client.close();
		} catch (error) {
			res.status(500).json({ message: 'Inserting data failed!' });
			return;
		}

		res.status(201).json({ message: 'Signed up!' });
	}
};

export default handler;
