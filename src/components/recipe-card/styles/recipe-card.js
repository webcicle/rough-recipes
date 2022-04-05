import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div`
	--margin-bottom: 0.5em;
	margin-bottom: 2em;

	display: grid;

	&:nth-child(2),
	&:nth-child(3),
	&:nth-child(4),
	&:nth-child(5) {
		grid-template-rows: repeat(2, 12rem);
		grid-template-areas: 'top' 'bottom';
	}

	@media (min-width: ${TABLET_WIDTH}px) {
		&:first-child {
			grid-area: Main;
			align-self: stretch;

			h2 {
				font-size: var(--fs-step-3);
			}

			img {
				max-height: 22rem;
			}
		}

		&:nth-child(2),
		&:nth-child(3) {
			h2 {
				font-size: var(--fs-step-1);
			}
			img {
				max-height: 10rem;
				grid-area: top;
			}
		}

		&:nth-child(2) {
			grid-area: Side1;
		}

		&:nth-child(3) {
			grid-area: Side2;
		}
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		&:first-child {
			h2 {
				font-size: var(--fs-step-2);
			}

			img {
				max-height: 450px;
			}
		}

		&:nth-child(2),
		&:nth-child(3),
		&:nth-child(4),
		&:nth-child(5) {
			h2 {
				font-size: var(--fs-step-0);
			}
			img {
				max-height: 10rem;
				grid-area: top;
			}
			p {
				font-size: 0.8rem;
			}
		}

		&:nth-child(2) {
			grid-area: Side1;
		}

		&:nth-child(3) {
			grid-area: Side2;
		}

		&:nth-child(4) {
			grid-area: Side3;
		}

		&:nth-child(5) {
			grid-area: Side4;
		}
	}
`;

export const Bottom = styled.div``;

export const Link = styled(RouterLink)`
	text-decoration: none;
	color: var(--grey-color);
	cursor: pointer;

	&:hover {
		color: var(--dark-grey-color);
	}
`;

export const Image = styled.img`
	width: 100%;
	max-height: 14rem;
	object-fit: cover;
	border-radius: var(--image-border-radius);
	margin-bottom: var(--margin-bottom);
`;

export const Title = styled.h2`
	font-family: var(--primary-font);
	font-size: var(--fs-step-2);
	margin-bottom: var(--margin-bottom);
`;

export const Synopsis = styled.p``;
