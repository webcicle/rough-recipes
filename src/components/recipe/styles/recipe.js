import styled from 'styled-components/macro';

export const Container = styled.div`
	margin-top: 1.5rem;
`;

export const SynopsisContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`;

export const Title = styled.h1`
	margin-bottom: 0.3em;
`;

export const Subtitle = styled.h3`
	margin-bottom: 0.6em;
	font-family: var(--secondary-font);
	font-weight: normal;
`;

export const MainContent = styled.main`
	display: flex;
	max-width: 100%;
	column-gap: 1rem;
`;

export const Image = styled.img`
	width: 50%;
	max-height: 100%;
	object-fit: cover;
	object-position: center;
	border-radius: var(--image-border-radius);
`;

export const Synopsis = styled.p`
	&:not(:last-child) {
		margin-bottom: 0.6em;
	}
`;
