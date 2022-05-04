import styled from 'styled-components/macro';
import * as SCREEN_SIZES from '../../../constants/screen-sizes';
import { Link as RouterLink } from 'react-router-dom';

const { TABLET_WIDTH, DESKTOP_WIDTH } = SCREEN_SIZES;

export const Container = styled.div`
	--fs: 0.8rem;
	--padding: 0.5em 0.4em;
	--border: 1px solid black;
	--border-radius: 5px;
	--background-color: var(--off-white-color);

	border: 1px solid var(--grey-color);
	border-radius: 25px;
	padding: 1em 1.2em;
	margin-top: 1rem;

	min-height: 255px;

	display: flex;
	flex-direction: column;
	${({ justify }) =>
		justify ? 'justify-content: space-between;' : 'justify-content: unset;'}

	@media (max-width: ${TABLET_WIDTH}px) and (min-width: ${DESKTOP_WIDTH}px) {
		margin-top: 2rem;
		min-height: 225px;
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		margin-top: 2.5rem;
	}
`;

export const Title = styled.h1`
	font-size: var(--fs-step-2);

	@media (min-width: ${DESKTOP_WIDTH}px) {
		font-size: var(--fs-step-1);
	}
`;

export const Details = styled.div`
	margin-bottom: 1.5em;
`;

export const Detail = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.5em;
	margin-bottom: 0.4em;
`;

export const DetailTitle = styled.h3`
	font-size: var(--fs-step-0);
	@media (min-width: ${DESKTOP_WIDTH}px) {
		font-size: var(--fs-step--2);
	}
`;

export const DetailValue = styled.p`
	font-size: var(--fs);
`;

export const Edits = styled.div`
	display: flex;
	justify-content: space-between;
	column-gap: 0.6em;

	@media (min-width: ${TABLET_WIDTH}px) {
		justify-content: left;
	}
`;

export const Button = styled.button`
	font-family: var(--secondary-font);
	font-weight: 500;
	font-size: var(--fs);
	padding: var(--padding);
	border: var(--border);
	border-radius: var(--border-radius);
	background-color: var(--background-color);
	cursor: pointer;
`;

export const Input = styled.input`
	font-family: var(--secondary-font);
	font-weight: 400;
	width: 200px;
	font-size: var(--fs);
	padding: var(--padding);
	border: var(--border);
	border-radius: var(--border-radius);
	background-color: var(--background-color);

	&:last-of-type {
		margin-bottom: 0.4em;
	}
`;

export const List = styled.ul`
	margin: 0;
	margin-top: 1rem;
	padding: 0;
	list-style: none;
	background-color: var(--grey-color);
	padding: 1em 0.6em;
	border-radius: var(--button-border-radius);
	height: 150px;
	overflow-y: scroll;
`;

export const ListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;

	&:not(:last-child) {
		margin-bottom: 0.6em;
	}
`;

export const Link = styled(RouterLink)`
	font-family: var(--primary-font);
	font-size: var(--fs-step-0);
	text-decoration: none;
	cursor: pointer;
	color: var(--secondary-color-dark);
	transition: color 100ms ease-in;
	padding-left: 2rem;

	&:hover {
		color: var(--dark-grey-color);
	}

	@media (min-width: ${TABLET_WIDTH}px) {
		padding-left: 4rem;
	}
	@media (min-width: ${DESKTOP_WIDTH}px) {
		font-size: var(--fs-step--2);
	}
`;

export const Image = styled.img`
	/* width: 80px; */
	height: 2rem;
	object-fit: cover;
`;
