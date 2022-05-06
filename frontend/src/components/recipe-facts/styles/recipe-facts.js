import styled from 'styled-components/macro';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div`
	padding: 1em 0.8em;
	position: relative;
	background-color: var(--main-bg-color);
	border-radius: var(--button-border-radius);
	padding-top: 2.4rem;
	padding-left: 2em;

	&::before {
		--offset: 0.5rem;
		content: '';
		background-color: var(--title-color-yellow);
		border-radius: var(--button-border-radius);
		opacity: 0.75;
		position: absolute;
		inset: 1;
		width: 100%;
		height: 100%;
		top: var(--offset);
		left: var(--offset);
		z-index: -4;
	}

	@media (min-width: ${TABLET_WIDTH}px) {
		margin-inline: 2rem;
	}
`;

export const Title = styled.h4`
	font-weight: normal;
	font-size: 1em;
	margin-bottom: 0.4em;
	color: var(--dark-grey-color);
`;

export const FactsContainer = styled.div`
	--emGap: 2em;
	--rowSize: 1.5rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.6em;
	margin-bottom: 0.8em;

	@media (min-width: ${TABLET_WIDTH}px) {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(4, calc(25% - var(--emGap)));
		grid-template-rows: ${({ rows }) =>
			rows === '2' ? 'repeat(2, var(--rowSize))' : 'repeat(1, var(--rowSize))'};
		column-gap: var(--emGap);
		grid-template-areas: ${({ rows }) =>
			rows === '1' ? `'a b c d'` : `'a b c d' 'a e c f'`};
	}
`;

export const Fact = styled.div`
	display: flex;
	justify-content: space-between;
	/* width: 100%; */
	font-size: 0.8em;

	&.clock {
		grid-area: a;
	}

	&.bowl {
		grid-area: c;
	}

	&.time-active {
		grid-area: b;
	}

	&.total-time {
		grid-area: e;
	}
	&.servings {
		grid-area: d;
	}
`;

export const FactTitle = styled.p`
	font-weight: 500;
	color: var(--title-color-yellow);
`;

export const FactData = styled.p`
	color: var(--dark-grey-color);
`;

export const FactsImage = styled.div`
	grid-area: c;
	align-self: left;

	&:first-child {
		grid-area: a;
	}

	svg {
		height: 30px;
		color: var(--title-color-yellow);
		aspect-ratio: 1;
	}

	@media (min-width: ${TABLET_WIDTH}px) {
		align-self: center;
	} ;
`;
