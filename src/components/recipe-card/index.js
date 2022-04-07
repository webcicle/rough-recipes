import {
	Bottom,
	Container,
	Image,
	Title,
	Synopsis,
	Link,
} from './styles/recipe-card';
import { StatusBar } from '../index';

export default function RecipeCard(props) {
	const {
		restProps,
		_id,
		title,
		author,
		synopsis,
		image,
		slug,
		createdAt,
		updatedAt,
	} = props.recipe;

	const statusProps = { author, createdAt, updatedAt };

	return (
		<RecipeCard.Container {...restProps}>
			<RecipeCard.Image src={image} alt={slug} />
			<RecipeCard.Bottom>
				<RecipeCard.Title id={_id}>{title}</RecipeCard.Title>
				<StatusBar shortBar='true' statusProps={statusProps} />
				<RecipeCard.Synopsis>{synopsis[0]}</RecipeCard.Synopsis>
			</RecipeCard.Bottom>
		</RecipeCard.Container>
	);
}

RecipeCard.Container = function RecipeCardContainer({
	children,
	...restProps
}) {
	return <Container {...restProps}>{children}</Container>;
};

RecipeCard.Bottom = function RecipeCardBottom({ children, ...restProps }) {
	return <Bottom {...restProps}>{children}</Bottom>;
};

RecipeCard.Title = function RecipeCardTitle({ id, children, ...restProps }) {
	return (
		<Link to={`/recipes/${id}`}>
			<Title {...restProps}>{children}</Title>
		</Link>
	);
};

RecipeCard.Image = function RecipeCardImage({ src, alt, ...restProps }) {
	return <Image src={src} alt={alt} {...restProps} />;
};

RecipeCard.Synopsis = function RecipeCardSynopsis({ children, ...restProps }) {
	return <Synopsis {...restProps}>{children}</Synopsis>;
};
