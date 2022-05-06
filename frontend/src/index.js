import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Normalize } from 'styled-normalize';
import 'react-toastify/dist/ReactToastify.css';
import { ColorStyles, GlobalStyles } from './styles';
import './styles/fonts.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './app/store';
import SEO from './seo';

render(
	<>
		<ReduxProvider store={store}>
			<SEO />
			<Normalize />
			<GlobalStyles />
			<ColorStyles />
			<Router>
				<App />
			</Router>
		</ReduxProvider>
	</>,
	document.getElementById('root')
);
