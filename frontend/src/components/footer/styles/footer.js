import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
	DESKTOP_WIDTH,
	LORG_WIDTH,
	TABLET_WIDTH,
} from '../../../constants/screen-sizes';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: ${LORG_WIDTH}px;
	margin-inline: auto;
	padding-bottom: 10rem;

	@media (min-width: ${TABLET_WIDTH}px) {
		padding-inline: 0.2em;
		padding-bottom: 6rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, minmax(100px, 125px));
		grid-template-areas: 'a a' 'b c';
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		padding-inline: 2em;
		padding-bottom: 4rem;
	}
`;

export const Column = styled.div`
	--link-gap: 1rem;

	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	align-items: center;
	text-transform: uppercase;
	letter-spacing: 8px;
	text-align: center;
	font-size: var(--fs-step-5);
	width: 100%;
	grid-area: ${({ area }) => (area ? area : 'unset')};

	&:not(:last-child)  {
		margin-bottom: 1.5rem;
	}

	@media (min-width: ${TABLET_WIDTH}px) {
		font-size: var(--fs-step-0);
		letter-spacing: 1px;
		text-transform: none;
		text-align: left;

		&:not(:last-child)  {
			margin-bottom: 0rem;
		}

		&:nth-child(2)  {
			align-items: flex-start;
		}

		&:last-child {
			text-align: right;
			align-items: flex-end;
		}
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		font-size: var(--fs-step--2);
	}
`;

export const Link = styled.a`
	font-family: var(--secondary-font);
	text-decoration: none;
	margin-bottom: var(--link-gap);

	&:hover {
		color: var(--off-white-color);
	}

	@media (min-width: ${TABLET_WIDTH}px) {
		margin-bottom: 0;
	}
`;

export const RouterLink = styled(ReactRouterLink)`
	font-family: var(--secondary-font);
	text-decoration: none;
	margin-bottom: var(--link-gap);

	&:hover {
		color: var(--off-white-color);
	}

	@media (min-width: ${TABLET_WIDTH}px) {
		margin-bottom: 0;
	}
`;

export const Image = styled.img`
	max-height: 200px;
	object-fit: cover;
	mix-blend-mode: difference;
	opacity: 0.5;

	@media (min-width: ${TABLET_WIDTH}px) {
		margin-bottom: 0;
		max-height: 125px;
	}
`;
