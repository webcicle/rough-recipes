import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import latestRecipesSlice from '../features/latest-recipes/latestRecipesSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		latest: latestRecipesSlice,
	},
});
