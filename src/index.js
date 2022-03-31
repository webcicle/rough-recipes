import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Normalize } from 'styled-normalize';
import { BrowserRouter as Router } from 'react-router-dom';

render(
	<>
		<Normalize />
		<Router>
			<App />
		</Router>
	</>,
	document.getElementById('root')
);
