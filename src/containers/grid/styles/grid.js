import styled from 'styled-components/macro';
import { DESKTOP_WIDTH, LORG_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.main`
	@media (min-width: ${DESKTOP_WIDTH}px) {
		display: grid;
		${({ columns }) =>
			columns === 3 ? '' : 'grid-template-columns: 1fr 12vw'};
		column-gap: 2rem;
		margin-inline: auto;
		max-width: calc(${LORG_WIDTH}px - 4rem);
	}
`;
