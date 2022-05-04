import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authServices from './authServices';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
	user: user ? user : null,
	favouriteRecipes: null,
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: '',
};

export const registerUser = createAsyncThunk(
	'auth/register',
	async (user, thunkAPI) => {
		try {
			return await authServices.registerNewUser(user);
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

export const loginUser = createAsyncThunk(
	'auth/login',
	async (user, thunkAPI) => {
		try {
			return await authServices.loginUser(user);
		} catch (error) {
			const message =
				(error.reponse && error.response.data && error.response.data.message) ||
				error.message ||
				error.request ||
				error.toString();
			return thunkAPI.rejectWithValue(
				message || 'There was an error logging in'
			);
		}
	}
);

export const logoutUser = createAsyncThunk('auth/logout', async () => {
	return authServices.logoutUser();
});

export const editUser = createAsyncThunk(
	'auth/editUser',
	async (props, thunkAPI) => {
		const { favourites, token } = props;
		try {
			return await authServices.editUser(favourites, token);
		} catch (error) {
			const message =
				(error.reponse && error.response.data && error.response.data.message) ||
				error.message ||
				error.request ||
				error.toString();
			return thunkAPI.rejectWithValue(message || 'There was an error editing');
		}
	}
);

export const getUserFavourites = createAsyncThunk(
	'auth/getUserFavourites',
	async (props, thunkAPI) => {
		try {
			return await authServices.getFavourites(props);
		} catch (error) {
			const message =
				(error.reponse && error.response.data && error.response.data.message) ||
				error.message ||
				error.request ||
				error.toString();
			return thunkAPI.rejectWithValue(
				message || 'There was an error getting the favourites'
			);
		}
	}
);

const authSlice = createSlice({
	name: 'auth',
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
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
				state.message = '';
				state.user = null;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(logoutUser.fulfilled, (state) => {
				state.user = null;
			})
			.addCase(editUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(editUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(editUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(getUserFavourites.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
				state.message = '';
				state.favouriteRecipes = null;
			})
			.addCase(getUserFavourites.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.favouriteRecipes = action.payload;
			})
			.addCase(getUserFavourites.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.favouriteRecipes = null;
			});
	},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
