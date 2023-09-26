import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;
		if (
			!email ||
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {
			res.status(422).json({ message: 'Invalid input.' });
			return;
		}

		const newMessage = {
			email,
			name,
			message,
		};

		let client;

		try {
			client = await MongoClient.connect(
				'mongodb+srv://maja:tPsV3dRjkBUPSMpZ@cluster0.uecbfcv.mongodb.net/my-site?retryWrites=true&w=majority'
			);
		} catch (error) {
			res.status(500).json({ message: 'Could not connect to database' });
		}

		const db = client.db();

		try {
			const result = await db.collection('messages').insertOne(newMessage);
			newMessage.id = result.insertedId;
		} catch (error) {
			client.close();
			res.status(500).json({ message: 'Storing message failed!' });
			return;
		}

		client.close();

		res
			.status(201)
			.json({ message: 'Successfully stored message!', message: newMessage });
	}
};

export default handler;