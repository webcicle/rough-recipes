import { Container, Title, Grid } from './styles/latest';

export default function Latest({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Latest.Title = function LatestTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
Latest.Grid = function LatestGrid({ children, ...restProps }) {
	return <Grid {...restProps}>{children}</Grid>;
};
