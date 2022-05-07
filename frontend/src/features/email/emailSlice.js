import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import emailServices from './emailServices';

const initialState = {
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: '',
};

export const sendEmail = createAsyncThunk(
	'email/send',
	async (message, thunkAPI) => {
		try {
			return await emailServices.sendMessage(message);
		} catch (error) {
			const message =
				(error.reponse && error.response.data && error.response.data.message) ||
				error.message ||
				error.request ||
				error.toString();
			return thunkAPI.rejectWithValue(
				message || 'There was an error registering'
			);
		}
	}
);

const emailSlice = createSlice({
	name: 'email',
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
			.addCase(sendEmail.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(sendEmail.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.message = action.payload;
			})
			.addCase(sendEmail.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = emailSlice.actions;
export default emailSlice.reducer;
