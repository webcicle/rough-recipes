import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
	background: linear-gradient(
		90deg,
		#17ecb9 0%,
		rgba(89, 217, 109, 0.42) 70.83%
	);
	width: 100%;
	position: relative;
	padding-left: 0.5em;

	display: flex;
	align-items: center;
	box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.1);
`;

export const Text = styled.h1`
	font-family: var(--primary-font);
	color: var(--dark-grey-color);
	letter-spacing: 0.22em;

	background: linear-gradient(
		90deg,
		rgba(0, 0, 0, 0.5) 0%,
		rgba(0, 0, 0, 0.06) 103.05%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;

	mix-blend-mode: luminosity;
`;

export const Button = styled.button`
	height: 80%;
	aspect-ratio: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	background: none;
	border: none;
	cursor: pointer;
`;

export const Image = styled.img`
	/* width: 90%; */
	width: 50px;
`;

export const Logo = styled.img`
	position: absolute;
	left: 50%;
	top: 0;
	transform: translate(-50%, -54.5%);
	transform: translate(${(props) => props.menuOpen && '-50%'});

	transition: transform 200ms ease-in;
	cursor: pointer;
	z-index: 222;
`;

export const Link = styled(ReactRouterLink)`
	--top-row: 10.5rem;
	--bottom-row: 9rem;
	font-family: var(--primary-font);
	font-size: 1.25rem;
	cursor: pointer;
	text-decoration: none;
	color: var(--grey-color);

	&:hover {
		color: var(--dark-grey-color);
		transition: color 100ms ease-in;
	}

	&:nth-child(even) {
		text-align: left;
	}

	&:nth-child(odd) {
		text-align: right;
	}

	&:first-child {
		padding-right: var(--top-row);
	}

	&:nth-child(2) {
		padding-left: var(--top-row);
	}

	&:nth-child(3) {
		padding-right: var(--bottom-row);
	}

	&:nth-child(4) {
		padding-left: var(--bottom-row);
	}
`;

export const LinksContainer = styled.nav`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 10rem;
	row-gap: 1.5rem;
`;

export const Menu = styled.div`
	background-image: url(${(props) => props.overlay});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: fixed;
	inset: 0;
	display: grid;
	justify-content: center;
	align-items: flex-start;

	opacity: ${(props) => (props.menuOpen ? 1 : 0)};
	transition: opacity 200ms ease-in;
`;
