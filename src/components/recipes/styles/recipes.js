import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import {
	DESKTOP_WIDTH,
	IPAD_PRO_HEIGHT,
	TABLET_WIDTH,
} from '../../../constants/screen-sizes';

export const Container = styled.div`
	margin-top: 1.5em;
`;

export const Inner = styled.div`
	@media (min-width: ${TABLET_WIDTH}px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 1.5em;
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const MainTitle = styled.h1`
	font-size: var(--fs-step-4);
	margin-bottom: 0.4em;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: auto;
`;

export const Card = styled.div`
	max-width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 1em;
	padding-block: 0.8em;
	border-radius: var(--image-border-radius);
	border: 1px solid var(--grey-color);

	@media (min-width: ${TABLET_WIDTH}px) {
		padding: 0.8em;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
		margin-bottom: 1.5rem;
	}
`;

export const Image = styled.img`
	display: block;
	width: 100%;
	height: 50vh;
	object-fit: cover;

	@media (min-width: ${TABLET_WIDTH}px) {
		height: 20vh;
	}
	/* @media (min-height: ${IPAD_PRO_HEIGHT}px) {
		height: 18rem;
	} */
`;

export const Link = styled(RouterLink)`
	background-color: var(--primary-color-light);
	padding: 0.45em 0.9em;
	font-family: var(--primary-font);
	font-size: var(--fs-step--2);
	color: var(--grey-color);
	text-decoration: none;
	border-radius: 100vh;
`;

export const Title = styled.h2`
	font-family: var(--primary-font);
	font-size: var(--fs-step--2);
`;
