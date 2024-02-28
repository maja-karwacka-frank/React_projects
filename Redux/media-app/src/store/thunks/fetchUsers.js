import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
	const response = await axios.get('http://localhost:3005/users');
	// DEV only!
	await pause(10000);
	
	// this will be an action.payload in extraReducers
	return response.data;
});

// DEV only!
const pause = (duration) => {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
};
