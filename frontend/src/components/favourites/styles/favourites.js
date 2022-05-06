import styled from 'styled-components/macro';
import { faHeart, faHeartO } from '@fortawesome/free-solid-svg-icons';
import { TABLET_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 70px;

	@media (max-width: ${TABLET_WIDTH}px) {
		width: 100%;
	}
`;

export const Column = styled.div``;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	column-gap: 0.8em;
	padding: 0.6em 0.7em;
	background-color: var(--primary-color);
	border: none;
	border-radius: var(--button-border-radius);
	cursor: pointer;
	min-width: 250px;
	margin-bottom: 0.5em;
	margin-bottom: auto;

	&:hover p {
		color: var(--off-white-color);
		transition: 150ms ease-in;
	}

	@media (max-width: ${TABLET_WIDTH}px) {
		padding-inline: 2em;
		width: 100%;
		margin-block: 0.5em;
	}
`;

export const Icon = styled.img`
	max-height: 1.5rem;
`;

export const Text = styled.p`
	@media (max-width: ${TABLET_WIDTH}px) {
		&:last-child {
			text-align: center;
		}
	}
`;
