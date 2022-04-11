import styled from 'styled-components/macro';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div`
	height: 100%;
	margin-top: 3rem;
	background-color: var(--passive-tab-color);
	border-radius: var(--image-border-radius);

	-webkit-box-shadow: 5px -4px 5px 0px rgba(196, 169, 86, 0.66);
	-moz-box-shadow: 5px -4px 5px 0px rgba(196, 169, 86, 0.66);
	box-shadow: 5px -4px 5px 0px rgba(196, 169, 86, 0.66);
`;

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (min-width: ${TABLET_WIDTH}px) {
		flex-direction: row;
	}
`;

export const Button = styled.button`
	width: 100%;
	height: 3.5rem;
	border: none;
	text-transform: uppercase;
	font-size: 1.8rem;
	letter-spacing: 8px;
	font-family: var(--secondary-font);
	cursor: pointer;

	${({ active }) =>
		active
			? 'background-color: var(--active-tab-color);border-top-left-radius: var(--image-border-radius);border-top-right-radius: var(--image-border-radius);z-index: 5;'
			: 'background-color: var(--passive-tab-color);border-top-right-radius: var(--image-border-radius);border-top-left-radius: var(--image-border-radius);'}

	@media (min-width: ${TABLET_WIDTH}px) {
		width: 50%;
	}
`;

export const Content = styled.div`
	background-color: var(--active-tab-color);
	height: fit-content;
	min-height: 225px;
	padding-bottom: 1rem;
	z-index: 20;
	border-bottom-left-radius: var(--image-border-radius);
	border-bottom-right-radius: var(--image-border-radius);

	ul {
		margin: 0;
	}

	li {
		margin-block: 1em;
		font-style: italic;
		letter-spacing: 2px;
	}

	p {
		padding-inline: 2em;
	}

	ul,
	p {
		padding-top: 2em;
		font-family: var(--secondary-font);
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		min-height: 200px;
	}
`;

export const List = styled.ul``;

export const ListItem = styled.li``;

export const Text = styled.p``;

{
	/* <ul><li>Wash all your balls before cooking</li><li>Tattoo all of your carrots and never forget to dry them completely</li><li>Calm your husband with some whiskey</li><li>Give your doctor a call cus you will have seizure</li></ul>; */
}
