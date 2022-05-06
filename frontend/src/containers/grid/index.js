import { Container } from './styles/grid';

export default function GridContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}
