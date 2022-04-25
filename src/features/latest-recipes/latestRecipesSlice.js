import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useState } from 'react';
import latestRecipesServices from './latestRecipesServices';

// const [latest, setLatest] = useState([]);

export const latestRecipes = createAsyncThunk('latest/get', async () => {
	try {
		return await latestRecipesServices.getLatestRecipes();
	} catch (error) {
		throw new Error(error);
	}
});

const initialState = {
	latest: null,
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: '',
};

const latestRecipesSlice = createSlice({
	name: 'latest',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(latestRecipes.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(latestRecipes.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.latest = action.payload;
			})
			.addCase(latestRecipes.rejected, (state, action) => {
				state.isLoading = false;
				state.isSuccess = false;
				state.isError = true;
				state.message = action.payload;
				state.latest = null;
			});
	},
});

export default latestRecipesSlice.reducer;
