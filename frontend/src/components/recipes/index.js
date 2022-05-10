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
	path,
	transformation,
	title,
	shortTitle,
	articleUrl,
	recipeUrl,
	children,
	...restProps
}) {
	return (
		<Card {...restProps}>
			<Image path={path} transformation={transformation} />
			<Title>{shortTitle ? shortTitle : title}</Title>
			<ButtonContainer>
				<Link to={recipeUrl}>go to recipe</Link>
			</ButtonContainer>
		</Card>
	);
};
