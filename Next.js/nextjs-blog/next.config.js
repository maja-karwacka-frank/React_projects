const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: 'maja',
				mongodb_password: 'tPsV3dRjkBUPSMpZ',
				mongodb_clustername: 'cluster0',
				mondodb_database: 'my-site-dev',
			},
		};
	}

	return {
		env: {
			mongodb_username: 'maja',
			mongodb_password: 'tPsV3dRjkBUPSMpZ',
			mongodb_clustername: 'cluster0',
			mondodb_database: 'my-site',
		},
	};
};
