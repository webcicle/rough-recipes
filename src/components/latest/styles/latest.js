import styled from 'styled-components/macro';
import { TABLET_WIDTH, DESKTOP_WIDTH } from '../../../constants/screen-sizes';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
	position: relative;
`;

export const Link = styled(RouterLink)`
	position: absolute;
	bottom: -8rem;
	left: 50%;
	transform: translateX(-50%);
	background-color: rgba(89, 217, 109, 0.62);
	padding: 1em 1.5em;
	font-family: var(--primary-font);
	font-size: var(--fs-step--1);
	color: var(--grey-color);
	text-decoration: none;
	border-radius: var(--button-border-radius);

	&:hover {
		color: var(--dark-grey-color);
	}

	@media (max-width: ${TABLET_WIDTH}px) {
		bottom: -10rem;
		text-align: center;
		font-size: var(--fs-step--2);
	}
`;

export const Title = styled.h1`
	/* letter-spacing: 0.29em; */
	letter-spacing: 0.38em;
	text-align: left;
	margin-top: 1.5em;
	margin-bottom: 0.8em;
	font-size: var(--fs-step-3);

	@media (min-width: ${TABLET_WIDTH}px) {
		letter-spacing: 0.24em;
		text-align: center;
	}
	@media (min-width: ${DESKTOP_WIDTH}px) {
		letter-spacing: 0.35em;
		text-align: left;
	}
`;

export const Subtitle = styled.h2`
	font-family: var(--primary-font);
	font-size: var(--fs-step--2);

	letter-spacing: 6px;
	line-height: 1.7rem;
	text-align: ${({ align }) => (align === 'center' ? 'center' : 'left')};
	margin-block: 1.5rem;
	margin-inline: 1em;
`;

export const Grid = styled.div`
	width: 100%;

	@media (min-width: ${TABLET_WIDTH}px) {
		display: grid;
		gap: 1em;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(2, auto);

		grid-template-areas:
			'Main1 Side1'
			'Main2 Side2';
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		gap: 0.2em 1.35em;
		grid-template-columns: repeat(4, calc(25% - 1em));
		grid-template-rows: repeat(2, 50%);
		grid-template-areas: 'Main Main Side1 Side2' 'Main Main Side3 Side4';
	}
`;
