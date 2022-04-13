import { Container } from './styles/sidebar';

export default function SidebarContainer({
	direction,
	children,
	...restProps
}) {
	return (
		<Container direction={direction} {...restProps}>
			{children}
		</Container>
	);
}
