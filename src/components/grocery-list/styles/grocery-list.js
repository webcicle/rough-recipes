import styled from 'styled-components/macro';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div`
	padding: 1em 2em;
	margin-top: 3rem;
	margin-bottom: 2rem;
	width: 100%;
`;
export const List = styled.div`
	margin: 0;
	padding: 0;
	width: 100%;
	margin-top: 2em;
	display: grid;
	font-size: 1rem;

	@media (min-width: ${TABLET_WIDTH}px) {
		grid-template-columns: 1fr 1fr;
		justify-content: space-between;
	}
	@media (min-width: ${DESKTOP_WIDTH}px) {
		grid-template-columns: 1fr;
		margin-top: 0;
	}
`;

export const Title = styled.h2`
	font-size: 1.8rem;
	letter-spacing: 3px;
	display: inline-block;
	text-align: center;
	position: relative;

	&::after {
		content: '';
		width: 100%;
		position: absolute;
		bottom: -0.3em;
		background-color: black;
		height: 3px;
		left: 50%;
		transform: translate(-50%);
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		align-self: center;
	}
`;

export const Split = styled.ul`
	list-style: none;
	padding: 0;
	text-align: center;
	margin-block: 0;
	z-index: 222;

	@media (min-width: ${TABLET_WIDTH}px) {
		text-align: left;

		&:last-child {
			text-align: right;
		}
	}
	@media (min-width: ${DESKTOP_WIDTH}px) {
		&:last-child {
			text-align: left;
		}
	}
`;

export const ListItem = styled.li`
	font-family: var(--secondary-font);
	margin-bottom: 0.9em;
	font-size: 1.3em;

	@media (min-width: ${DESKTOP_WIDTH}px) {
		font-size: 1em;
		}
	}
`;

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: ${TABLET_WIDTH}px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	@media (min-width: ${DESKTOP_WIDTH}px) {
		flex-direction: column;
		justify-content: center;
	}
`;
