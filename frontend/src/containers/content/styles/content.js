import styled from 'styled-components/macro';
import {
	DESKTOP_WIDTH,
	LORG_WIDTH,
	TABLET_WIDTH,
} from '../../../constants/screen-sizes';

export const Main = styled.main`
	width: 100%;
	margin: 0 auto;
	margin-bottom: var(--margin-bottom-page);
	padding: 2rem 1.5em;
	background-color: var(--off-white-color);
	box-shadow: 6px 4px 20px rgba(0, 0, 0, 0.25);
	overflow-y: hidden;
	z-index: 1;
	min-height: ${({ minHeight }) => minHeight && 'calc(100vh - 8rem)'};

	// dynamic border radius, based on the component property 'direction'
	// can be set to 'up' – border at the bottom, 'down' - border at the top, and 'center' - all around.
	//change custom prop --radius to increase/decrease radius

	--radius: 25px;
	${(props) =>
		props.direction === 'center' &&
		'border-radius: var(--radius) var(--radius) var(--radius) var(--radius)'};
	${(props) =>
		props.direction === 'up' &&
		'border-radius: 0px 0px var(--radius) var(--radius)'};
	${(props) =>
		props.direction === 'down' &&
		'border-radius: var(--radius) var(--radius) 0px 0px; box-shadow: -6px -4px 20px rgba(0, 0, 0, 0.25)'};

	order: ${(props) => (props.order ? props.order : null)};

	@media (min-width: ${TABLET_WIDTH}px) {
		--radius: 45px;
		max-width: 95vw;
	}
	@media (min-width: ${TABLET_WIDTH}px) and (max-width: ${DESKTOP_WIDTH}px) {
		position: relative;
		margin-bottom: 3rem;
		/* added these two lines for the recipe page, in case something fucks up */
		display: flex;
		flex-direction: column;

		&::after {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			background-color: inherit;
			top: -12px;
			left: 0;
			z-index: -20;
			border-radius: inherit;
			box-shadow: inherit;

			--radius: 45px;
			${(props) =>
				props.direction === 'down' &&
				'border-radius: var(--radius) var(--radius) var(--radius) var(--radius)'};
			${(props) =>
				props.direction === 'center' &&
				'border-radius: var(--radius) var(--radius) var(--radius) var(--radius)'};
			${(props) =>
				props.direction === 'up' &&
				'border-radius: 0px 0px var(--radius) var(--radius)'};
		}
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		/* max-width: ${DESKTOP_WIDTH - 100}px; */ //old SETTING in case it fucks up
		max-width: calc(${LORG_WIDTH}px - 4rem);
		grid-area: ${({ area }) => area};
	}
`;

export const Title = styled.h2`
	font-size: 1.8rem;
	margin-bottom: 0.4em;
	position: relative;
	color: var(--dark-grey-color);

	&::after {
		content: '';
		width: max-content;
		position: absolute;
		bottom: -0.3em;
		background-color: black;
		height: 3px;
		left: 50%;
		transform: translate(-50%);
	}

	@media (min-width: ${TABLET_WIDTH}px) {
		padding-left: 2rem;
	}
`;
