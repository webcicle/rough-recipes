import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import latestRecipesSlice from '../features/latest-recipes/latestRecipesSlice';
import emailReducer from '../features/email/emailSlice';
import articlesReducer from '../features/articles/articlesSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		latest: latestRecipesSlice,
		email: emailReducer,
		articles: articlesReducer,
	},
});
