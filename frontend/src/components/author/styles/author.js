import { IKImage } from 'imagekitio-react';
import styled from 'styled-components/macro';
import {
	DESKTOP_WIDTH,
	MOBILE_WIDTH,
	TABLET_WIDTH,
} from '../../../constants/screen-sizes';

export const Container = styled.div`
	padding: 1.6em 2em;

	@media (max-width: ${MOBILE_WIDTH + 50}px) {
		padding: 0;
	}

	@media (min-width: ${TABLET_WIDTH}px) {
		background: rgb(42, 195, 204);
		background: radial-gradient(
			circle,
			rgba(42, 195, 204, 1) 0%,
			rgba(71, 109, 112, 1) 0%,
			rgba(71, 109, 112, 1) 19%,
			rgba(42, 195, 204, 1) 100%
		);
		border-radius: var(--image-border-radius);
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		--radius: 25px;
		border-radius: 0px 0px 0px var(--radius);
		background: none;
	}
`;

export const Image = styled(IKImage)`
	max-width: 75%;
	margin-inline: auto;

	max-width: 31.25rem;
	border-radius: 50%;
	border: 6px solid var(--primary-color-light);

	@media (min-width: ${DESKTOP_WIDTH}px) {
		max-width: 5vw;
	}
`;

export const Title = styled.h2`
	text-align: center;
	text-transform: capitalize;
	margin-block: 0.9em;
`;

export const Bio = styled.div``;

export const Inner = styled.div`
	max-width: 500px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1.5em 0.8em;
	background-color: var(--off-white-color);

	@media (min-width: ${TABLET_WIDTH}px) {
		box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.2);
		border-radius: var(--image-border-radius);
	}
`;

export const Paragraph = styled.p`
	padding-inline: 1.3em;

	&:not(:last-child) {
		margin-bottom: 1em;
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		font-size: var(--fs-step--2);
	}
`;
