import styled from 'styled-components/macro';

export const Container = styled.div`
	background: linear-gradient(
		90deg,
		#17ecb9 0%,
		rgba(89, 217, 109, 0.42) 70.83%
	);
	width: 100%;
	min-height: 40px;
	position: relative;
	padding-left: 0.5em;
	z-index: 110;

	display: flex;
	align-items: center;
	box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.1);

	@media (min-width: 700px) {
		min-height: 60px;
	}
	@media (min-width: 1200px) {
		min-height: 70px;
	}
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

export const LogoContainer = styled.div`
	position: absolute;
	left: 50%;
	top: 0;

	// transition
	transform: translate(-50%, -52.5%);
	transform: translate(${({ menu }) => menu && '-50%'});

	// transition browser support
	-webkit-transform: translate(-50%, -52.5%);
	-moz-transform: translate(-50%, -52.5%);

	-webkit-transform: translate(${({ menu }) => menu && '-50%'});
	-moz-transform: translate(${({ menu }) => menu && '-50%'});

	transition: transform 200ms ease-in;
	cursor: pointer;
	z-index: 222;

	width: 50%;

	@media (min-width: 700px) {
		width: 25%;

		// "Halo" effect
		&::before {
			content: '';
			visibility: ${({ menu }) => (menu ? 'visible' : 'hidden')};
			transform: scale(${({ menu }) => (menu ? '1' : '0')});
			transition-property: visibility, transform;
			transition-duration: 200ms;
			transition-timing-function: ease-in;
			z-index: -2;
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			background: #f5f5f5;
			filter: blur(220px);
			-webkit-filter: blur(220px);
		}
	}

	@media (min-width: 1200px) {
		width: auto;
	}
`;

export const Icon = styled.img`
	/* width: 90%; */
	width: 50px;
`;

export const Logo = styled.img`
	width: 100%;
`;

export const Link = styled.button`
	font-family: var(--primary-font);
	font-size: 1.25rem;
	cursor: pointer;
	text-decoration: none;
	background: none;
	border: 0;
	z-index: 222;

	@media (min-width: 700px) {
		--top-row: 8.5rem;
		--bottom-row: 6.5rem;
		color: var(--link-color);

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
	}

	@media (min-width: 1000px) {
		--top-row: 10.5rem;
		--bottom-row: 9rem;
		&:hover {
			color: var(--dark-grey-color);
			transition: color 100ms ease-in;
		}
	}
`;

export const LinksContainer = styled.nav`
	margin-top: 14rem;
	row-gap: 1.5rem;
	display: flex;
	flex-direction: column;

	@media (min-width: 700px) {
		margin-top: 10rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const Menu = styled.div`
	background-color: var(--main-bg-color);
	position: fixed;
	inset: 0;
	display: grid;
	justify-content: center;
	align-items: flex-start;
	z-index: 50;

	opacity: ${(props) => (props.menuOpen ? 1 : 0)};
	visibility: ${(props) => (props.menuOpen ? 'visible' : 'hidden')};
	transition-property: opacity, visibility;
	transition-duration: 200ms;
	transition-timing-function: ease-in;

	@media (min-width: 700px) {
		background-color: transparent;
		z-index: 111;

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			background: radial-gradient(
				106.2% 106.2% at 50% 11.23%,
				#313131 48.55%,
				#70e6cd 100%
			);
			filter: blur(600px);
			-webkit-filter: blur(600px);
		}
	}
`;
