import styled from 'styled-components/macro';

const Container = styled.aside`
	background-color: var(--off-white-color);
	min-height: 500px;

	--radius: 25px;
	${(props) =>
		props.direction === 'right' &&
		'border-radius: 0px 0px 0px var(--radius); box-shadow: 6px -4px 20px rgba(0, 0, 0, 0.25);'};
	${(props) =>
		props.direction === 'left' &&
		'border-radius: 0px 0px var(--radius) 0px; box-shadow: 6px 4px 20px rgba(0, 0, 0, 0.25)'};
`;

export default function Sidebar({ direction, children, ...restProps }) {
	return (
		<Container direction={direction} {...restProps}>
			SidebarContainer Hello
			{children}
		</Container>
	);
}
