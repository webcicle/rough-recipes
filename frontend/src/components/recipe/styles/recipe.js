import styled from 'styled-components/macro';
import { IKImage } from 'imagekitio-react';
import { TABLET_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div`
	margin-top: 1.5rem;
	grid-area: b;
`;

export const SynopsisContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: ${TABLET_WIDTH}px) {
		width: 50%;
	}
`;

export const Title = styled.h1`
	margin-bottom: 0.3em;

	@media (max-width: ${TABLET_WIDTH}px) {
		font-size: var(--fs-step-5);
		word-wrap: break-word;
	}
`;

export const Subtitle = styled.h3`
	margin-bottom: 0.6em;
	font-family: var(--secondary-font);
	font-weight: normal;
`;

export const MainContent = styled.main`
	display: flex;
	flex-direction: column;
	max-width: 100%;
	column-gap: 1rem;

	@media (min-width: ${TABLET_WIDTH}px) {
		flex-direction: row;
	}
`;

export const Image = styled(IKImage)`
	max-height: 100%;
	object-fit: cover;
	object-position: center;
	border-radius: var(--image-border-radius);
	margin-bottom: 1em;

	@media (min-width: ${TABLET_WIDTH}px) {
		width: 50%;
		margin-bottom: 0;
	}
`;

export const Synopsis = styled.p`
	&:not(:last-child) {
		margin-bottom: 0.6em;
	}
`;
