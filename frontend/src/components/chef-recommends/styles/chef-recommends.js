import { IKImage } from 'imagekitio-react';
import styled from 'styled-components/macro';
import { TABLET_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div`
	margin-block: 2rem;
	grid-row: 3 / span 1;
`;

export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	background-color: var(--bg-grey-color);
	padding: 1em 2em;
	border-radius: var(--image-border-radius);
	box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.3);

	@media (min-width: ${TABLET_WIDTH}px) {
		text-align: left;
		margin-inline: 2rem;
		flex-direction: row;
		column-gap: 1.4em;
	}
`;

export const Column = styled.div``;

export const Image = styled(IKImage)`
	max-width: 500px;
	border-radius: 50%;
	border: 6px solid var(--primary-color-light);
`;

export const Title = styled.h2`
	margin-bottom: 0.6em;
`;

export const Recommendation = styled.p`
	font-size: var(--fs-step-1);
	&:not(:last-child) {
		margin-bottom: 1em;
	}

	@media (min-width: ${TABLET_WIDTH}px) {
		font-size: var(--fs-step--1);
	}
`;
