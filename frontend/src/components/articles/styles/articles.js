import styled from 'styled-components/macro';
import { TABLET_WIDTH, DESKTOP_WIDTH } from '../../../constants/screen-sizes';
import { IKImage } from 'imagekitio-react';

export const Container = styled.div`
	@media (min-width: ${TABLET_WIDTH}px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		overflow: hidden; // weird that I had to put this in but can't seem to find the actual overflow
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		--height-minus-nav: calc(100vh - 4rem);

		display: grid;

		min-height: var(--height-minus-nav);
		width: 100%;
		grid-template-columns: repeat(10, 10%);
		grid-template-rows: repeat(4, calc(var(--height-minus-nav) / 4));
		grid-template-areas:
			'a a b b e e e f g g'
			'a a c d e e e f g g'
			'h h h i k m n n n o'
			'h h h j j m n n n o';
	}
`;

export const ImageContainer = styled.div`
	position: relative;

	&:last-child {
		grid-column: span 2;
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		grid-area: ${({ className }) => (className ? className : '')};
		&:hover .overlay {
			visibility: visible;
			opacity: 1;
			transition: opacity 150ms ease-in;
			border: 2px solid var(--off-white-color);
		}
	}
`;

export const ImageKitImage = styled(IKImage)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
	cursor: pointer;

	@media (max-width: ${TABLET_WIDTH}px) {
		&:not(.a) {
			min-height: 100vh;
		}

		&.a {
			min-height: calc(100vh - 40px);
		}
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		grid-area: ${({ className }) => (className ? className : '')};

		&:nth-child(2n) {
			border-left: none;
		}

		&:not(:nth-last-child(2), :last-child) {
			border-bottom: none;
		}
	}
`;

export const Overlay = styled.div`
	position: absolute;
	z-index: 5;
	inset: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 1em 0.8em;
	cursor: pointer;

	@media (min-width: ${DESKTOP_WIDTH}px) {
		background: var(--nav-gradient-rev);
		visibility: hidden;
		opacity: 0;
		border: 2px solid hidden;
	}
`;

export const OverlayTitle = styled.h2`
	color: var(--primary-color);
	text-transform: capitalize;
	text-shadow: 2px 2px 1px var(--dark-grey-color);
	@media (min-width: ${DESKTOP_WIDTH}px) {
		text-shadow: 1px 1px 1px var(--dark-grey-color);

		color: var(--off-white-color);
	}
`;

export const OverlayDescription = styled.p`
	color: var(--primary-color);
	text-shadow: 2px 2px 1px var(--dark-grey-color);
	@media (min-width: ${DESKTOP_WIDTH}px) {
		text-shadow: 1px 1px 1px var(--dark-grey-color);

		color: var(--off-white-color);
	}
	font-size: var(--fs-step-1);

	@media (min-width: ${TABLET_WIDTH}px) {
		font-size: var(--fs-step--1);
	}
	@media (min-width: ${DESKTOP_WIDTH}px) {
		font-size: var(--fs-step--2);
	}
`;
