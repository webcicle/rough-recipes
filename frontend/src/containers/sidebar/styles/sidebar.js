import styled from 'styled-components/macro';
import { DESKTOP_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.aside`
	background-color: var(--off-white-color);
	grid-area: ${({ area }) => (area ? area : null)};
	margin-bottom: var(--margin-bottom-page);

	--radius: 25px;
	${(props) =>
		props.direction === 'right' &&
		'border-radius: 0px 0px 0px var(--radius); box-shadow: 6px -4px 20px rgba(0, 0, 0, 0.25);'};
	${(props) =>
		props.direction === 'left' &&
		'border-radius: 0px 0px var(--radius) 0px; box-shadow: 6px 4px 20px rgba(0, 0, 0, 0.25)'};
	${(props) =>
		props.direction === 'center' &&
		'border-radius: var(--radius); box-shadow: 6px 4px 20px rgba(0, 0, 0, 0.25)'};

	@media (max-width: ${DESKTOP_WIDTH}px) {
		max-width: 95vw;
		margin-inline: auto;
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		max-width: ${DESKTOP_WIDTH + 30}px;
		margin-inline: auto;

		&:first-child {
			grid-area: ${({ area }) => (area ? area : null)};
		}
	}
`;
