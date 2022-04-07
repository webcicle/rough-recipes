import styled from 'styled-components/macro';

export const Container = styled.div`
	margin-bottom: 0.4em;
	display: flex;
	column-gap: 1em;
`;

export const TagsContainer = styled.div`
	margin-bottom: 0.4em;
	display: flex;
	column-gap: 1em;
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
