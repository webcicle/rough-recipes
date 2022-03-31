import { Routes, Route } from 'react-router-dom';
import { Home, Login, Register, Recipes } from './pages';
import { HeaderContainer } from './containers';
import { ColorStyles, GlobalStyles } from './styles';
import './styles/fonts.css';

export default function App() {
	return (
		<>
			<div className='App light-theme'>
				<GlobalStyles />
				<ColorStyles />
				<HeaderContainer />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/recipes' element={<Recipes />} />
				</Routes>
			</div>
		</>
	);
}
