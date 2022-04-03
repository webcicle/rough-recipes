import styled from 'styled-components/macro';
import * as SCREEN_SIZES from '../constants/screen-sizes.js';

const { TABLET_WIDTH, DESKTOP_WIDTH } = SCREEN_SIZES;

const Main = styled.main`
	width: 100%;
	margin: 4rem auto;
	background-color: var(--off-white-color);
	padding: 1em 0.4em;
	box-shadow: 6px 4px 20px rgba(0, 0, 0, 0.25);

	// dynamic border radius, based on the component property 'direction'
	// can be set to 'up' – border at the bottom, 'down' - border at the top, and 'center' - all around.
	//change custom prop --radius to increase/decrease radius

	--radius: 25px;
	${(props) =>
		props.direction === 'down' &&
		'border-radius: var(--radius) var(--radius) 0px 0px; box-shadow: -6px -4px 20px rgba(0, 0, 0, 0.25)'};
	${(props) =>
		props.direction === 'center' &&
		'border-radius: var(--radius) var(--radius) var(--radius) var(--radius)'};
	${(props) =>
		props.direction === 'up' &&
		'border-radius: 0px 0px var(--radius) var(--radius)'};

	@media (min-width: ${TABLET_WIDTH}px) {
		--radius: 45px;
		max-width: 95vw;
	}
	@media (min-width: ${TABLET_WIDTH}px) and (max-width: ${DESKTOP_WIDTH}px) {
		position: relative;

		&::before {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			background-color: inherit;
			top: 27px;
			left: 0;
			z-index: -1;
			border-radius: inherit;
			box-shadow: inherit;

			--radius: 25px;
			${(props) =>
				props.direction === 'down' &&
				'border-radius: var(--radius) var(--radius) 0px 0px'};
			${(props) =>
				props.direction === 'center' &&
				'border-radius: var(--radius) var(--radius) var(--radius) var(--radius)'};
			${(props) =>
				props.direction === 'up' &&
				'border-radius: 0px 0px var(--radius) var(--radius)'};
		}
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		max-width: ${DESKTOP_WIDTH}px;
	}
`;

export default function ContentContainer({
	direction,
	children,
	...restProps
}) {
	return (
		<Main direction={direction} {...restProps}>
			<h1>Content container</h1>
			{children}
		</Main>
	);
}
