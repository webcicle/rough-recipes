import { createGlobalStyle, css } from 'styled-components';

const theme = css`
	:root,
	.light-theme {
		--primary-color: #17ecb9;
		--secondary-color: #eec584;
		--secondary-color-dark: #eec584;
		--main-bg-color: #c8ebed;
		--accent-bg-color: #2ac3cc;
		--grey-color: #e7e7e7;
		--dark-grey-color: #030d1e;
		--link-color: #c7c7c7;
		--off-white-color: #f4f4f4;
		/* --active-tab-color: #ffea2f; */
		--active-tab-color: var(--title-color-yellow);
		/* --passive-tab-color: #c4c4c4; */
		--passive-tab-color: var(--grey-color);
		--instructions-bg: #e6e6e6;
		/* --title-color-yellow: #ff8700; */ // old "yellow"
		--title-color-yellow: #d88f2b;
	}
	.dark-theme {
		--primary-color: #17ecb9;
		--secondary-color: #eec584;
		--secondary-color-dark: #eec584;
		--main-bg-color: #c8ebed;
		--grey-color: #14080e;
		--dark-grey-color: #49475b;
		--link-color: #49475b;
	}
`;

const ColorStyles = createGlobalStyle(theme);

export default ColorStyles;
