import styled from 'styled-components/macro';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div`
	--width: 20vw;
	--logo-width: var(--width);
	--transition: 350ms;

	max-width: 100vw;
	max-height: 100vh;
	height: fit-content;
	position: relative;

	@media (max-width: ${TABLET_WIDTH}px) {
		--logo-width: 50vw;
	}

	@media (min-width: ${DESKTOP_WIDTH}px) {
		--logo-width: 10vw;
	}
`;

export const ImageContainer = styled.div`
	background-color: black;
	position: relative;
`;

export const Image = styled.img`
	max-height: 100vh;
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const TextImage = styled.img`
	display: block;
	position: absolute;
	z-index: 0;
	top: 75%;
	left: 50%;
	max-width: 100%;
	padding-inline: 2rem;
	transform: translate(-50%, -50%);

	@media (min-width: ${DESKTOP_WIDTH}px) {
		top: 60%;
	}
`;

export const Overlay = styled.img`
	position: absolute;
	object-position: center;
	inset: 0;
	width: 100%;
	height: 100%;

	object-fit: cover;
	opacity: ${({ open }) => (open ? '1' : '0')};
	transition: opacity var(--transition) ease-in-out;
`;

export const Logo = styled.img`
	max-width: var(--logo-width);
	transition: transform var(--transition) ease-in-out;
	${({ open }) => (open ? 'transform: scale(1.25);' : 'transform: scale(1);')};
	cursor: pointer;
`;

export const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	position: absolute;
	top: 0;
	left: 50%;
	transition: transform var(--transition) ease-in-out;
	transform: translateX(-50%);
	transform: translate(${({ open }) => (open ? '-50%, 2rem' : '-50% -2rem')});
`;

export const LogoText = styled.img`
	max-width: var(--logo-width);
	opacity: ${({ open }) => (open ? '1' : '0')};
	transition: opacity var(--transition) ease-in-out;
`;
