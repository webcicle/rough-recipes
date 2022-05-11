import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../../../constants/screen-sizes';
import { IKImage } from 'imagekitio-react';

export const Container = styled.div`
	display: grid;
	grid-auto-rows: min-content;
`;

export const Header = styled.div``;

export const Title = styled.h1`
	font-size: var(--fs-step-2);
	margin-top: 1.3em;
	margin-bottom: 0.6em;

	@media (max-width: ${TABLET_WIDTH}px) {
		font-size: var(--fs-step-4);
	}
`;

export const Subtitle = styled.h2`
	font-family: var(--secondary-font);
	font-weight: 400;
	font-size: var(--fs-step-0);
	margin-bottom: 0.6em;

	@media (max-width: ${TABLET_WIDTH}px) {
		font-size: var(--fs-step-2);
	}
`;

export const Block = styled.div`
	width: 100%;

	@media (min-width: ${TABLET_WIDTH}px) {
		display: flex;
		justify-content: space-between;
		column-gap: 2rem;
		margin-block: 0.6rem;

		&:nth-child(odd) {
			flex-direction: row-reverse;
		}
	}
`;

export const Content = styled.div`
	display: flex;
	margin-bottom: 1.2rem;

	&:first-child,
	&:nth-child(2) {
		flex-direction: column;
	}

	&:has(Image) {
		border: 1px solid red;
	}
`;

export const Paragraph = styled.p`
	font-size: var(--fs-step-0);
	max-width: 700px;

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

export const Image = styled(IKImage)`
	border-radius: var(--image-border-radius);
	max-height: 25rem;
	object-fit: cover;
	width: 100%;

	@media (max-width: ${TABLET_WIDTH}px) {
		max-height: 600px;
		max-width: 100%;
	}

	@media (min-width: ${TABLET_WIDTH}px) {
		min-height: 100%;
	}
	@media (min-width: ${DESKTOP_WIDTH}px) {
	}
`;

export const Link = styled(RouterLink)`
	font-family: var(--primary-font);
	font-size: var(--fs-step-2);
	text-decoration: none;
	text-align: center;
	display: block;
	margin-bottom: 2rem;
	margin-top: 4rem;
	letter-spacing: 2px;
	color: var(--dark-grey-color);
	cursor: pointer;
	transition: color 150ms ease-in;

	&:hover {
		color: var(--secondary-color-dark);
	}
`;
