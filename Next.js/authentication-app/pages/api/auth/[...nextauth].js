import { verifyPassword } from '@/lib/auth';
import { connectToDatabase } from '@/lib/db';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions ={
	session: {
		jwt: true,
	},
	secret:'i9WUr3J6hBvb4OsyLfYaV0w5bBkEQor07Arftwun9SE=',
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				const client = await connectToDatabase();

				const userCollection = client.db().collection('users');

				const user = await userCollection.findOne({ email: credentials.email });

				if (!user) {
					throw new Error('No user found!');
				}

				const isValid = await verifyPassword(
					credentials.password,
					user.password
				);

				if (!isValid) {
                    client.close();
					throw new Error('Could not log you in!');
				}

				client.close();
				return { email: user.email };

			},
		}),
	],
};

export default NextAuth(authOptions);

