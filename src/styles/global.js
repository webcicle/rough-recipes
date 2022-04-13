import { createGlobalStyle, css } from 'styled-components';
import { TABLET_WIDTH } from '../constants/screen-sizes';

const styles = css`
	:root {
		--image-border-radius: 0.6rem;
		--button-border-radius: 0.6rem;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	ul,
	li,
	a,
	button {
		color: var(--dark-grey-color);
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
		padding: 0;
	}

	h1 {
		font-family: var(--primary-font);
		fill: var(--dark-grey-color);
	}

	h2,
	h3,
	h4,
	p {
		font-family: var(--secondary-font);
	}

	body {
		background-color: var(--main-bg-color);
		color: var(--dark-grey-color);
	}
`;

const GlobalStyles = createGlobalStyle(styles);

export default GlobalStyles;
