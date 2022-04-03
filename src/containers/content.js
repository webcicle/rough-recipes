import styled from 'styled-components/macro';

const Main = styled.main`
	width: 100%;
	margin: 4rem auto;
	background-color: var(--off-white-color);
	padding: 1em 0.4em;
`;

export default function ContentContainer({
	direction,
	children,
	...restProps
}) {
	return (
		<Main direction={direction} {...restProps}>
			<h1>Content container</h1>
			{children}
		</Main>
	);
}
