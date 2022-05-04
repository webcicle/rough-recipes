import styled from 'styled-components/macro';
import { TABLET_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div`
	background-color: var(--instructions-bg);
	position: relative;
	padding: 1rem;
	margin-inline: 2rem;
	border-radius: var(--button-border-radius);
	margin-bottom: 1em;

	@media (max-width: ${TABLET_WIDTH}px) {
		padding-bottom: 2rem;
		margin: 0;
		margin-bottom: 4em;
	}

	@media (max-height: 860px) {
		padding-top: 2.4rem;
		padding-bottom: 4rem;
	}
`;

export const Inner = styled.div`
	position: relative;
	min-height: 300px;

	@media (min-width: ${TABLET_WIDTH}px) {
		min-height: 200px;
	}
`;

export const Slide = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	display: grid;
	align-items: flex-start;
	text-align: left;
	width: 80%;
	min-height: 200px;

	height: 100%;

	margin-inline: auto;
	padding: 2rem;
	border-radius: 1em;
	background-color: var(--off-white-color);

	transform: translateX(-50%);
	opacity: ${({ slideIndex, id }) => (slideIndex === id ? 1 : 0)};
	transition: opacity 150ms ease-in-out;

	div {
		display: grid;
		grid-template-columns: 20px 1fr;
	}

	.number {
		align-self: baseline;
	}

	@media (max-width: ${TABLET_WIDTH}px) {
		top: 50%;
		transform: translate(-50%, -50%);
	}
`;

export const Button = styled.button`
	position: absolute;
	display: grid;
	place-items: center;
	border-radius: 50%;
	aspect-ratio: 1;
	border: 0;
	top: 50%;
	background-color: var(--title-color-yellow);
	color: var(--grey-color);
	cursor: pointer;

	&:first-of-type {
		left: 0;
		transform: translate(-50%, -50%);
		box-shadow: 4px 0px 7px 2px #a4a4a4;
	}

	&:last-of-type {
		right: 0;
		transform: translate(50%, -50%);
		box-shadow: -4px 0px 7px 2px #a4a4a4;
	}

	svg {
		height: 4rem;
	}

	@media (max-width: ${TABLET_WIDTH}px) {
		top: 90%;

		&:first-of-type {
			left: 50%;
			transform: translateX(-125%);
		}

		&:last-of-type {
			right: 50%;
			transform: translateX(125%);
		}
	}
`;
