import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { latestRecipes } from './features/latest-recipes/latestRecipesSlice';
import {
	Articles,
	Home,
	Login,
	Profile,
	Register,
	AllRecipes,
	Recipe,
} from './pages';
import { HeaderContainer, Wrapper } from './containers';
import { ToastContainer } from 'react-toastify';
import * as ROUTES from './constants/routes';

export default function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		// getRecipes();
		dispatch(latestRecipes());
	}, []);

	return (
		<>
			<div className='App light-theme'>
				<HeaderContainer />
				<Wrapper>
					<Routes>
						<Route path={ROUTES.HOME} element={<Home />} />
						<Route path={ROUTES.LOGIN} element={<Login />} />
						<Route path={ROUTES.REGISTER} element={<Register />} />
						<Route path={ROUTES.ALL_RECIPES} element={<AllRecipes />} />
						<Route path={ROUTES.RECIPE} element={<Recipe />} />
						<Route path={ROUTES.ARTICLES} element={<Articles />} />

						<Route path={ROUTES.PROFILE} element={<Profile />} />
					</Routes>
				</Wrapper>
				<ToastContainer />
			</div>
		</>
	);
}
