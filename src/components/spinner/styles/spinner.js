import styled from 'styled-components/macro';

export const Container = styled.div`
	position: absolute;
	inset: 0;
	display: grid;
	place-items: center;
`;

export const Spinner = styled.img`
	display: block;
	animation-name: spin360;
	animation-duration: 800ms;
	animation-fill-mode: forwards;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	max-height: clamp(80px, 20vw, 200px);

	z-index: 99999;

	@keyframes spin360 {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
