import styled from 'styled-components/macro';
import { TABLET_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div`
	margin-bottom: 1em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid var(--dark-grey-color);
	padding-bottom: 1em;

	@media (max-width: ${TABLET_WIDTH}px) {
		flex-direction: column;
	}
`;

export const Column = styled.div`
	display: flex;
	column-gap: 1em;

	&:first-child {
		align-self: flex-end;
	}

	@media (max-width: ${TABLET_WIDTH}px) {
		width: 100%;
	}
`;

export const TagsContainer = styled.div`
	display: flex;
	column-gap: 1em;

	@media (max-width: ${TABLET_WIDTH}px) {
		margin-bottom: 0.4em;
	}
`;

export const Title = styled.div`
	font-family: var(--secondary-font);
	font-weight: 400;
	font-size: 1em;
`;

export const Tag = styled.span`
	background-color: var(--primary-color);
	font-size: 0.8em;
	font-family: var(--secondary-font);
	text-transform: uppercase;
	padding: 0.1em 0.3em;
`;
