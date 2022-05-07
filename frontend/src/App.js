import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { latestRecipes } from './features/latest-recipes/latestRecipesSlice';
import {
	Articles,
	Article,
	Home,
	Login,
	Profile,
	Register,
	AllRecipes,
	Recipe,
	Privacy,
	TermsOfService,
	Contact,
	About,
} from './pages';
import { HeaderContainer, Wrapper, FooterContainer } from './containers';
import { ToastContainer } from 'react-toastify';
import * as ROUTES from './constants/routes';
import { useSelector } from 'react-redux';

export default function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		// getRecipes();
		dispatch(latestRecipes());
	}, []);

	const { user } = useSelector((state) => state.auth);

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
						<Route path={ROUTES.ARTICLE} element={<Article />} />

						<Route path={ROUTES.PROFILE} element={<Profile />} />
						<Route path={ROUTES.PRIVACY_POLICY} element={<Privacy />} />
						<Route path={ROUTES.CONTACT} element={<Contact />} />
						<Route path={ROUTES.ABOUT} element={<About />} />
						<Route path={ROUTES.TOS} element={<TermsOfService />} />
					</Routes>
				</Wrapper>
				<FooterContainer />
				<ToastContainer />
			</div>
		</>
	);
}