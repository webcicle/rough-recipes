import styled from 'styled-components/macro';
import * as SCREEN_SIZES from '../constants/screen-sizes.js';

const { TABLET_WIDTH } = SCREEN_SIZES;

const Main = styled.main`
	width: 100%;
	margin: 4rem auto;
	background-color: var(--off-white-color);
	padding: 1em 0.4em;

	@media (min-width: ${TABLET_WIDTH}px) {
		box-shadow: 6px 4px 20px rgba(0, 0, 0, 0.25);
		border-radius: 0px 0px 25px 25px;
	} ;
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
