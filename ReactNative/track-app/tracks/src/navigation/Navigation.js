import React, { useContext } from 'react';

import { ExternalNavigation } from './ExternalNavigation';
import { InternalTabNavigation } from './InternalNavigation';
import { Context as AuthContext } from '../context/AuthContext';

export const Navigation = () => {
	const { state } = useContext(AuthContext);

	return state.isSignedIn ? <InternalTabNavigation /> : <ExternalNavigation />;
};
