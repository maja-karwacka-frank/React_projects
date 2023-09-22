import Layout from '@/components/layout/layout';
import { NotificationContextProvider } from '@/store/notification-context';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<NotificationContextProvider>
			<Layout>
				<Head>
					<title>Next Events</title>
					<meta name='description' content='NextJS Events'></meta>
					<meta
						name='viewport'
						content='initial-sciale=1.0, width=device-width'></meta>
				</Head>
				<Component {...pageProps} />
			</Layout>
		</NotificationContextProvider>
	);
}
