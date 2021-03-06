import {
	Bottom,
	Container,
	Image,
	Title,
	Synopsis,
	Link,
} from './styles/recipe-card';
import { StatusBar } from '../index';
import { TABLET_WIDTH } from '../../constants/screen-sizes';

export default function RecipeCard({ recipe }) {
	const {
		restProps,
		_id,
		shortTitle,
		author,
		synopsis,
		image,
		slug,
		createdAt,
		updatedAt,
		wordCount,
	} = recipe;

	const statusProps = { author, createdAt, updatedAt, wordCount };

	let width = 450;
	if (window.innerWidth > TABLET_WIDTH) {
		width = 600;
	}

	return (
		<RecipeCard.Container {...restProps}>
			{image && (
				<RecipeCard.Image
					path={`${slug}.png`}
					transformation={[{ width }]}
					alt={slug}
				/>
			)}
			<RecipeCard.Bottom>
				{shortTitle && (
					<RecipeCard.Title slug={slug}>{shortTitle}</RecipeCard.Title>
				)}
				{statusProps && <StatusBar shortBar='true' statusProps={statusProps} />}
				{synopsis && (
					<RecipeCard.Synopsis>{synopsis[0].slice(0, 120)}</RecipeCard.Synopsis>
				)}
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

RecipeCard.Title = function RecipeCardTitle({ slug, children, ...restProps }) {
	return (
		<Link to={`/recipes/${slug}`}>
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
