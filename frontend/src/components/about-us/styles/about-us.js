import styled from 'styled-components/macro';

export const Container = styled.div`
	--spacing-bottom: 1rem;
	margin-top: 3rem;
`;

export const Title = styled.h1`
	margin-bottom: var(--spacing-bottom);
`;

export const Subtitle = styled.h2`
	margin-bottom: var(--spacing-bottom);
	font-size: var(--fs-step-0);
`;

export const Paragraph = styled.p`
	margin-bottom: var(--spacing-bottom);
	font-size: var(--fs-step--1);

	span {
		text-transform: uppercase;
		font-weight: bold;
	}
`;
