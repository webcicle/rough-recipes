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
import { IKContext } from 'imagekitio-react';

render(
	<>
		<IKContext
			publicKey='public_ALbtXTpaHOmBKFVUa9JDKkOo5KA='
			urlEndpoint='https://ik.imagekit.io/vikmax/rough-recipes'
			transformationPosition='path'
			authenticationEndpoint='http://www.yourserver.com/auth'>
			<ReduxProvider store={store}>
				<SEO />
				<Normalize />
				<GlobalStyles />
				<ColorStyles />
				<Router>
					<App />
				</Router>
			</ReduxProvider>
		</IKContext>
	</>,
	document.getElementById('root')
);
