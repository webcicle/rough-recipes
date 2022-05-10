import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import articlesServices from './articlesServices';

export const allArticles = createAsyncThunk(
	'allArticles/get',
	async (thunkAPI) => {
		try {
			return await articlesServices.getAllArticles();
		} catch (error) {
			const message =
				(error.reponse && error.response.data && error.response.data.message) ||
				error.message ||
				error.request ||
				error.toString();
			return thunkAPI.rejectWithValue(
				message || 'There was an error fetching the articles'
			);
		}
	}
);

export const latestArticles = createAsyncThunk(
	'latestArticles/get',
	async (thunkAPI) => {
		try {
			return await articlesServices.getLatestArticles();
		} catch (error) {
			const message =
				(error.reponse && error.response.data && error.response.data.message) ||
				error.message ||
				error.request ||
				error.toString();
			return thunkAPI.rejectWithValue(
				message || 'There was an error fetching the latest articles'
			);
		}
	}
);

const initialState = {
	articles: null,
	latest: null,
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: '',
};

const articlesReducer = createSlice({
	name: 'articles',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(allArticles.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(allArticles.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.allArticles = action.payload;
			})
			.addCase(allArticles.rejected, (state, action) => {
				state.isLoading = false;
				state.isSuccess = false;
				state.isError = true;
				state.message = action.payload;
				state.allArticles = null;
			})
			.addCase(latestArticles.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(latestArticles.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.latest = action.payload;
			})
			.addCase(latestArticles.rejected, (state, action) => {
				state.isLoading = false;
				state.isSuccess = false;
				state.isError = true;
				state.message = action.payload;
				state.latest = null;
			});
	},
});

export default articlesReducer.reducer;
