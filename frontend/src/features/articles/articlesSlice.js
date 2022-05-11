import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import articlesServices from './articlesServices';

const articles = JSON.parse(localStorage.getItem('articles'));

const initialState = {
	articles: articles ? articles : null,
	latest: null,
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: '',
};

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

const articlesReducer = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(allArticles.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(allArticles.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.articles = action.payload;
			})
			.addCase(allArticles.rejected, (state, action) => {
				state.isLoading = false;
				state.isSuccess = false;
				state.isError = true;
				state.message = action.payload;
				state.articles = null;
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

export const { reset } = articlesReducer.actions;
export default articlesReducer.reducer;
