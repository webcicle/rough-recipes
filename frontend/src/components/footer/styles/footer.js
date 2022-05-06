import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { TABLET_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: minmax(150px, 200px) minmax(100px, 150px);
	grid-template-areas: 'a a' 'b c';
	flex-direction: column;
	align-items: center;

	@media (min-width: ${TABLET_WIDTH}px) {
		padding-inline: 6em;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;

	&:first-child {
		align-items: center;
	}

	&:last-child {
		text-align: right;
	}

	width: 100%;
	grid-area: ${({ area }) => (area ? area : 'unset')};
`;

export const Link = styled.a`
	font-family: var(--secondary-font);
	text-decoration: none;

	&:hover {
		color: var(--off-white-color);
	}
`;

export const RouterLink = styled(ReactRouterLink)`
	font-family: var(--secondary-font);
	text-decoration: none;

	&:hover {
		color: var(--off-white-color);
	}
`;

export const Image = styled.img`
	max-height: 200px;
	object-fit: cover;
`;
