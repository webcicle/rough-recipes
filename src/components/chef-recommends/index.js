import {
	Container,
	Column,
	Inner,
	Image,
	Title,
	Recommendation,
} from './styles/chef-recommends';

export default function ChefRecommends({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

ChefRecommends.Inner = function ChefRecommendsInner({
	children,
	...restProps
}) {
	return <Inner {...restProps}>{children}</Inner>;
};

ChefRecommends.Column = function ChefRecommendsColumn({
	children,
	...restProps
}) {
	return <Column {...restProps}>{children}</Column>;
};

ChefRecommends.Image = function ChefRecommendsImage({ ...restProps }) {
	return <Image {...restProps} />;
};

ChefRecommends.Title = function ChefRecommendsTitle({
	children,
	...restProps
}) {
	return <Title {...restProps}>{children}</Title>;
};

ChefRecommends.Recommendation = function ChefRecommendsRecommendation({
	to,
	children,
	...restProps
}) {
	return (
		<Recommendation to={to} {...restProps}>
			{children}
		</Recommendation>
	);
};
