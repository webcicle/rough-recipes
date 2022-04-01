import { createGlobalStyle, css } from 'styled-components';

const styles = css`
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
	p {
		margin: 0;
		padding: 0;
	}
`;

const GlobalStyles = createGlobalStyle(styles);

export default GlobalStyles;
