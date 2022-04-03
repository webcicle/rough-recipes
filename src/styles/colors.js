import { createGlobalStyle, css } from 'styled-components';

const theme = css`
	:root,
	.light-theme {
		--primary-color: #17ecb9;
		--secondary-color: #eec584;
		--secondary-color-dark: #eec584;
		--main-bg-color: #c8ebed;
		--grey-color: #14080e;
		--dark-grey-color: #49475b;
		--link-color: #c7c7c7;
		--off-white-color: #f4f4f4;
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
