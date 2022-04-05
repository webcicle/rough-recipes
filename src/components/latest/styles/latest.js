import styled from 'styled-components/macro';
import { TABLET_WIDTH, DESKTOP_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div``;

export const Title = styled.h1`
	/* letter-spacing: 0.29em; */
	letter-spacing: 0.38em;
	text-align: left;
	margin-top: 1.5em;
	margin-bottom: 0.8em;
	font-size: var(--fs-step-4);

	@media (min-width: ${TABLET_WIDTH}px) {
		letter-spacing: 0.24em;
		text-align: center;
	}
	@media (min-width: ${DESKTOP_WIDTH}px) {
		letter-spacing: 0.35em;
		text-align: left;
	}
`;

export const Grid = styled.div`
	@media (min-width: ${TABLET_WIDTH}px) {
		display: grid;
		column-gap: 1em;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(2, 50%);

		grid-template-areas:
			'Main Side1'
			'Main Side2';
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		grid-template-columns: repeat(4, calc(25% - 1em));
		grid-template-rows: repeat(2, 50%);
		grid-template-areas:
			'Main Main Side1 Side3'
			'Main Main Side2 Side4';
	}
`;
