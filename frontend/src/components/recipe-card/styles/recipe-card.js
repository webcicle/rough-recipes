import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../../../constants/screen-sizes';
import { IKImage } from 'imagekitio-react';

export const Container = styled.div`
	--margin-bottom: 0.5rem;
	margin-bottom: var(--margin-bottom);
	display: flex;
	flex-direction: column;
	padding: 0.4em 0.6em;
	transition: 250ms ease-in-out;
	border-radius: var(--image-border-radius);
	height: 100%;
	background-color: var(--off-white-color);

	@media (max-width: ${TABLET_WIDTH}px) {
		margin-bottom: 2em;
		border: 1px solid var(--grey-color);
		box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.2);
	}

	@media (min-width: ${TABLET_WIDTH}px) {
		position: relative;

		&::before {
			--offset: 5px;
			content: '';
			position: absolute;
			border-radius: var(--image-border-radius);
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			top: var(--offset);
			left: var(--offset);
			z-index: -1;
			background-color: var(--secondary-color-dark);
		}
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		border: 1px solid var(--grey-color);

		&:hover {
			border: 1px solid var(--dark-grey-color);
			box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.2);
		}

		&:first-child {
			grid-area: Main;

			img {
				height: 700px;
			}
		}
	}
`;

export const Bottom = styled.div`
	min-height: 10rem;
`;

export const Link = styled(RouterLink)`
	text-decoration: none;
	color: var(--grey-color);
	cursor: pointer;

	&:hover {
		color: var(--dark-grey-color);
	}
`;

export const Image = styled(IKImage)`
	width: 100%;
	height: 225px;
	object-fit: cover;
	border-radius: var(--image-border-radius);
	margin-bottom: var(--margin-bottom);
`;

export const Title = styled.h2`
	font-family: var(--primary-font);
	font-size: var(--fs-step-1);
	margin-bottom: var(--margin-bottom);

	@media (max-width: ${TABLET_WIDTH}px) {
		font-size: var(--fs-step-2);
	}
`;

export const Synopsis = styled.p`
	font-size: 1rem;
`;
