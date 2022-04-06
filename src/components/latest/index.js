import { Container, Title, Grid, Link } from './styles/latest';

export default function Latest({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Latest.Title = function LatestTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Latest.Container = function LatestContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Latest.Grid = function LatestGrid({ children, ...restProps }) {
	return <Grid {...restProps}>{children}</Grid>;
};

Latest.Link = function LatestLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};
