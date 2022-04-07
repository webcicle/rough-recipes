import {
	Container,
	Title,
	Subtitle,
	MainContent,
	SynopsisContainer,
	Image,
	Synopsis,
} from './styles/recipe';

export default function Recipe({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Recipe.Title = function RecipeTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Recipe.Subtitle = function RecipeSubtitle({ children, ...restProps }) {
	return <Subtitle {...restProps}>{children}</Subtitle>;
};

Recipe.MainContent = function RecipeMainContent({ children, ...restProps }) {
	return <MainContent {...restProps}>{children}</MainContent>;
};

Recipe.SynopsisContainer = function RecipeSynopsisContainer({
	children,
	...restProps
}) {
	return <SynopsisContainer {...restProps}>{children}</SynopsisContainer>;
};

Recipe.Image = function RecipeImage({ children, ...restProps }) {
	return <Image {...restProps} />;
};

Recipe.Synopsis = function RecipeSynopsis({ children, ...restProps }) {
	return <Synopsis {...restProps}>{children}</Synopsis>;
};
