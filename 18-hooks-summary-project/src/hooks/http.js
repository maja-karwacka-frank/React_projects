import { useCallback, useReducer } from 'react';

const initialState = {
	loading: false,
	errror: null,
	data: null,
	extra: null,
	identifier: null,
};

const httpReducer = (curHttpState, action) => {
	switch (action.type) {
		case 'SEND':
			return {
				loading: true,
				error: null,
				data: null,
				extra: null,
				identifier: action.identifier,
			};
		case 'RESPONSE':
			return {
				...curHttpState,
				loading: false,
				data: action.responseData,
				extra: action.extra,
			};
		case 'ERROR':
			return { loading: false, error: action.errorMessage };
		case 'CLEAR':
			return initialState;
		default:
			throw new Error('Should not be reached');
	}
};

const useHttp = () => {
	const [httpState, dispachHttp] = useReducer(httpReducer, initialState);

	const clear = useCallback(() => dispachHttp({ type: 'CLEAR' }), []);

	const sendRequest = useCallback(
		(url, method, body, reqExtra, reqIdentifier) => {
			dispachHttp({ type: 'SEND', identifier: reqIdentifier });
			fetch(url, {
				method: method,
				body: body,
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((response) => {
					return response.json();
				})
				.then((responseData) => {
					dispachHttp({
						type: 'RESPONSE',
						responseData: responseData,
						extra: reqExtra,
					});
				})
				.catch((error) => {
					dispachHttp({ type: 'ERROR', errorMessage: 'Something went wrong!' });
				});
		},
		[]
	);

	return {
		isLoading: httpState.loading,
		data: httpState.data,
		error: httpState.error,
		sendRequest,
		reqExtra: httpState.extra,
		reqIdentifier: httpState.identifier,
		clear
	};
};

export default useHttp;
