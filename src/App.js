import { Routes, Route } from 'react-router-dom';
import {
	Articles,
	Home,
	Login,
	Profile,
	Register,
	AllRecipes,
	Recipe,
} from './pages';
import { HeaderContainer } from './containers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ColorStyles, GlobalStyles } from './styles';
import './styles/fonts.css';
import * as ROUTES from './constants/routes';

export default function App() {
	return (
		<>
			<div className='App light-theme'>
				<GlobalStyles />
				<ColorStyles />
				<HeaderContainer />
				<Routes>
					<Route path={ROUTES.HOME} element={<Home />} />
					<Route path={ROUTES.LOGIN} element={<Login />} />
					<Route path={ROUTES.REGISTER} element={<Register />} />
					<Route path={ROUTES.ALL_RECIPES} element={<AllRecipes />} />
					<Route path={ROUTES.RECIPE} element={<Recipe />} />
					<Route path={ROUTES.ARTICLES} element={<Articles />} />

					<Route path={ROUTES.PROFILE} element={<Profile />} />
				</Routes>
				<ToastContainer />
			</div>
		</>
	);
}
