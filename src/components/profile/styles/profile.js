import styled from 'styled-components/macro';
import * as SCREEN_SIZES from '../../../constants/screen-sizes';

const { TABLET_WIDTH } = SCREEN_SIZES;

export const Container = styled.div`
	--fs: 0.8rem;
	--padding: 0.5em 0.4em;
	--border: 1px solid black;
	--border-radius: 5px;
	--background-color: var(--off-white-color);

	border: 1px solid var(--grey-color);
	border-radius: 25px;
	padding: 1em 1.2em;
	margin-top: 1rem;

	@media (max-width: ${TABLET_WIDTH}px) {
		margin-top: 2rem;
	}
`;

export const Title = styled.h1``;

export const Details = styled.div`
	margin-bottom: 1.5em;
`;

export const Detail = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.5em;
	margin-bottom: 0.4em;
`;

export const DetailTitle = styled.h3`
	font-size: var(--fs);
`;

export const DetailValue = styled.p`
	font-size: var(--fs);
`;

export const Edits = styled.div`
	display: flex;
	column-gap: 0.6em;
`;

export const Button = styled.button`
	font-family: var(--secondary-font);
	font-weight: 500;
	font-size: var(--fs);
	padding: var(--padding);
	border: var(--border);
	border-radius: var(--border-radius);
	background-color: var(--background-color);
	cursor: pointer;
`;

export const Input = styled.input`
	font-family: var(--secondary-font);
	font-weight: 400;
	width: 200px;
	font-size: var(--fs);
	padding: var(--padding);
	border: var(--border);
	border-radius: var(--border-radius);
	background-color: var(--background-color);
`;
