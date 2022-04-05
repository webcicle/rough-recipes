import { Container, Image, Title, Synopsis } from './styles/recipe-card';
import { StatusBar } from '../index';

export default function RecipeCard({
	restProps,
	src,
	alt,
	title,
	statusProps,
	synopsis,
}) {
	return (
		<RecipeCard.Container {...restProps}>
			<RecipeCard.Image src={src} alt={alt} />
			<RecipeCard.Title>{title}</RecipeCard.Title>
			<StatusBar {...statusProps} />
			<RecipeCard.Synopsis>{synopsis}</RecipeCard.Synopsis>
		</RecipeCard.Container>
	);
}

RecipeCard.Container = function RecipeCardContainer({
	children,
	...restProps
}) {
	return <Container {...restProps}>{children}</Container>;
};

RecipeCard.Title = function RecipeCardTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

RecipeCard.Image = function RecipeCardImage({
	src,
	alt,
	children,
	...restProps
}) {
	return <Image src={src} alt={alt} {...restProps} />;
};

RecipeCard.Synopsis = function RecipeCardSynopsis({ children, ...restProps }) {
	return <Synopsis {...restProps}>{children}</Synopsis>;
};
