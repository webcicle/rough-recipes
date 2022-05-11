import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authorServices from './authorServices';

const initialState = {
	authors: null,
	specificAuthor: null,
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: '',
};

export const findAllAuthors = createAsyncThunk(
	'authors/getAll',
	async (thunkAPI) => {
		try {
			return await authorServices.getAllAuthors();
		} catch (error) {
			const message =
				(error.reponse && error.response.data && error.response.data.message) ||
				error.message ||
				error.request ||
				error.toString();
			return thunkAPI.rejectWithValue(
				message || 'There was an error fetching the authors'
			);
		}
	}
);

export const createAuthor = createAsyncThunk(
	'authors/register',
	async (newAuthor, thunkAPI) => {
		try {
			return await authorServices.createAuthor(newAuthor);
		} catch (error) {
			const message =
				(error.reponse && error.response.data && error.response.data.message) ||
				error.message ||
				error.request ||
				error.toString();
			return thunkAPI.rejectWithValue(
				message || 'There was an error creating the author'
			);
		}
	}
);

export const findAuthor = createAsyncThunk(
	'authors/findOne',
	async (id, thunkAPI) => {
		try {
			return await authorServices.findAuthor(id);
		} catch (error) {
			const message =
				(error.reponse && error.response.data && error.response.data.message) ||
				error.message ||
				error.request ||
				error.toString();
			return thunkAPI.rejectWithValue(
				message || 'There was an error finding the author'
			);
		}
	}
);

const authorSlice = createSlice({
	name: 'authors',
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
			.addCase(findAllAuthors.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(findAllAuthors.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.authors = action.payload;
			})
			.addCase(findAllAuthors.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.authors = null;
				state.message = action.payload;
			})
			.addCase(createAuthor.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createAuthor.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.authors = null;
			})
			.addCase(createAuthor.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.authors = null;
				state.message = action.payload;
			})
			.addCase(findAuthor.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(findAuthor.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.specificAuthor = action.payload;
			})
			.addCase(findAuthor.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.specificAuthor = null;
			});
	},
});

export const { reset } = authorSlice.actions;
export default authorSlice.reducer;
