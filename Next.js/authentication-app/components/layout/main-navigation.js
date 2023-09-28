import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

import classes from './main-navigation.module.css';

const MainNavigation = () => {
	const { data: session, status } = useSession();

	return (
		<header className={classes.header}>
			<Link href='/'>
				<div className={classes.logo}>Next Auth</div>
			</Link>
			<nav>
				<ul>
					{!session && status !== 'loading' && (
						<li>
							<Link href='/auth'>Login</Link>
						</li>
					)}

					{session && (
						<li>
							<Link href='/profile'>Profile</Link>
						</li>
					)}
					{session && (
						<li>
							<button onClick={() => signOut()}>Logout</button>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
