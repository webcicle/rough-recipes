import styled from 'styled-components/macro';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div`
	--spacing: 1rem;
	padding-top: 2rem;
	font-family: var(--primary-font);

	@media (min-width: ${TABLET_WIDTH}px) {
		--spacing: 1.3rem;
	}
`;

export const Title = styled.h1`
	margin-bottom: var(--spacing);
	font-size: var(--fs-step-3);

	@media (min-width: ${DESKTOP_WIDTH}px) {
		font-size: var(--fs-step-2);
		text-align: center;
	}
`;

export const SmallTitle = styled.h2`
	margin-bottom: var(--spacing);
	display: block;
	font-size: var(--fs-step-3);

	@media (min-width: ${TABLET_WIDTH}px) {
		font-size: var(--fs-step-2);
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		font-size: var(--fs-step--1);
	}
`;

export const Paragraph = styled.p`
	margin-bottom: var(--spacing);
	display: block;
	font-size: var(--fs-step-2);

	@media (min-width: ${TABLET_WIDTH}px) {
		font-size: var(--fs-step-1);
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		font-size: var(--fs-step--2);
	}
`;
