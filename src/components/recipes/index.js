import {
	Container,
	Card,
	Image,
	MainTitle,
	Title,
	Link,
	ButtonContainer,
	Inner,
} from './styles/recipes';

export default function Recipes({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Recipes.MainTitle = function RecipesMainTitle({ children, ...restProps }) {
	return <MainTitle {...restProps}>{children}</MainTitle>;
};

Recipes.Inner = function RecipesInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Recipes.Card = function RecipesCard({
	src,
	alt,
	title,
	articleUrl,
	recipeUrl,
	children,
	...restProps
}) {
	return (
		<Card {...restProps}>
			<Image src={src} alt={alt} />
			<Title>{title}</Title>
			<ButtonContainer>
				<Link to={articleUrl}>Article</Link>
				<Link to={recipeUrl}>Recipe</Link>
			</ButtonContainer>
		</Card>
	);
};
