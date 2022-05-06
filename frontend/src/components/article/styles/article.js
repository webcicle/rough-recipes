import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div``;

export const Header = styled.div``;

export const Title = styled.h1`
	font-size: var(--fs-step-2);
	margin-top: 1.3em;
	margin-bottom: 0.6em;

	@media (max-width: ${TABLET_WIDTH}px) {
		font-size: var(--fs-step-3);
	}
`;

export const Block = styled.div`
	width: 100%;

	@media (min-width: ${TABLET_WIDTH}px) {
		display: flex;
		justify-content: space-between;
		column-gap: 2rem;
	}
`;

export const Content = styled.div`
	/* max-width: 50%; */
	display: flex;

	&:first-child,
	&:nth-child(2) {
		flex-direction: column;
	}
`;

export const Paragraph = styled.p`
	font-size: var(--fs-step-0);

	@media (min-width: ${TABLET_WIDTH}px) {
		font-size: var(--fs-step--1);
	}

	@media (max-width: ${TABLET_WIDTH}px) {
		font-size: var(--fs-step-1);
	}

	&:not(:last-child) {
		margin-bottom: 1em;
	}
`;

export const Image = styled.img`
	object-fit: cover;
	border-radius: var(--image-border-radius);
	max-height: 400px;

	@media (max-width: ${TABLET_WIDTH}px) {
		margin-block: 1.2rem;
		max-height: 600px;
	}

	@media (min-width: ${TABLET_WIDTH}px) {
		width: 30vw;
		min-height: 100%;
	}
	@media (min-width: ${DESKTOP_WIDTH}px) {
		width: 20vw;
	}
`;

export const Link = styled(RouterLink)`
	font-family: var(--primary-font);
	font-size: var(--fs-step-2);
	text-decoration: none;
	text-align: center;
	display: block;
	margin-block: 2rem;
	letter-spacing: 2px;
	color: var(--dark-grey-color);
	cursor: pointer;
	transition: color 150ms ease-in;

	&:hover {
		color: var(--secondary-color-dark);
	}
`;
