import styled from 'styled-components/macro';
import { MOBILE_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div`
	width: 100%;
	background-color: var(--primary-color);
	padding: 1rem;
	margin-top: auto;

	@media (max-width: ${MOBILE_WIDTH + 50}px) {
		padding: 0;
	}
`;
