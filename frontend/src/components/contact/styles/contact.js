import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div`
	--space-r: 0rem;
	min-height: 350px;
	margin-top: 2rem;
	border: 1px solid var(--grey-color);
	border-radius: var(--image-border-radius);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1rem 1.3rem;

	@media (min-width: ${DESKTOP_WIDTH}px) {
		--space-r: 4rem;
	}
`;

export const Footer = styled.footer`
	display: flex;
	justify-content: end;
	padding-right: var(--space-r);
`;

export const Input = styled.textarea`
	resize: none;
	padding: 1em 0.8em;
	height: 200px;
	font-family: var(--secondary-font);
	border-radius: var(--image-border-radius);
	border: none;
	margin-bottom: 0.7rem;

	@media (min-width: ${TABLET_WIDTH}px) {
		width: calc(100% - var(--space-r));
		font-size: var(--fs-step--1);
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		font-size: var(--fs-step--2);
	}
`;

export const Text = styled.p`
	margin-bottom: 1rem;
	padding-right: var(--space-r);

	@media (max-width: ${TABLET_WIDTH}px) {
		font-size: var(--fs-step-1);
	}
`;

export const Title = styled.h1`
	margin-bottom: 0.5rem;
`;

export const Link = styled(RouterLink)``;

export const Button = styled.button`
	border-radius: var(--button-border-radius);
	padding: 0.5em 0.8em;
	letter-spacing: 2px;
	font-family: var(--secondary-font);
	border: none;
	background-color: var(--primary-color-light);
	color: var(--grey-color);
	cursor: pointer;
	transition: 250ms ease-in;

	&:hover {
		color: var(--dark-grey-color);
		background-color: var(--primary-color);
	}
`;
