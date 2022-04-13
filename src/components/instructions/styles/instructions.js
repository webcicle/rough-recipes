import styled from 'styled-components/macro';
import { TABLET_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div`
	background-color: var(--instructions-bg);
	position: relative;
	padding: 1rem 0;
	margin: 2rem;
	border-radius: var(--button-border-radius);

	@media (max-width: ${TABLET_WIDTH}px) {
		margin: 0;
	}
`;

export const Inner = styled.div`
	overflow: hidden;
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
	width: 80%;
	min-height: 200px;

	height: fit-content;
	grid-template-columns: 20px 1fr;
	margin-inline: auto;
	/* padding: 3rem 2rem; */
	padding: 2rem;
	border-radius: 1em;
	background-color: var(--off-white-color);

	transform: translateX(-50%);
	opacity: ${({ slideIndex, id }) => (slideIndex === id ? 1 : 0)};
	transition: opacity 150ms ease-in-out;

	@media (max-width: ${TABLET_WIDTH}px) {
		top: 50%;
		transform: translate(-50%, -50%);
	}
`;

export const Button = styled.button`
	position: absolute;
	width: fit-content;
	display: grid;
	place-items: center;
	border-radius: 50%;
	aspect-ratio: 1;
	border: 0;
	top: 50%;
	z-index: 55;
	background-color: none;
	cursor: pointer;

	&:first-of-type {
		left: 0;
		transform: translate(-50%, -50%);
		box-shadow: 4px 0px 7px 2px #a4a4a4;
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
		&:first-of-type {
			left: 50%;
			bottom: 0;
			top: 83%;
			transform: translateX(-125%);
		}

		&:last-of-type {
			right: 50%;
			bottom: 0;
			top: 83%;
			transform: translateX(125%);
		}
	}
`;
