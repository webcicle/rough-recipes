import {
	ContentContainer,
	GridContainer,
	SidebarContainer,
} from '../containers';
import {
	Author,
	Article,
	StatusBar,
	ChefRecommends,
	Spinner,
} from '../components';
import { DESKTOP_WIDTH, LORG_WIDTH } from '../constants/screen-sizes';
import { ARTICLES } from '../constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { latestArticles, reset } from '../features/articles/articlesSlice';
import {
	findAuthor,
	reset as authorReset,
} from '../features/authors/authorSlice';

export default function ArticlePage() {
	const { articles, isLoading } = useSelector((state) => state.articles);
	const { specificAuthor, isLoading: authorIsLoading } = useSelector(
		(state) => state.authors
	);
	const { slug } = useParams();
	const dispatch = useDispatch();

	console.log(specificAuthor);

	useEffect(() => {
		// dispatch(latestArticles());
		dispatch(findAuthor(author.id));
		dispatch(reset());
		dispatch(authorReset());

		return () => {
			console.log('Delete storage');
		};
	}, []);

	if (isLoading) {
		return (
			<ContentContainer minHeight direction='up'>
				<Spinner />
			</ContentContainer>
		);
	}

	const thisArticle = articles?.filter((art) => art.slug == slug)[0];

	const {
		fullTitle,
		subtitle,
		author,
		createdAt,
		updatedAt,
		wordCount,
		contentBlocks,
		recommendations,
	} = thisArticle;

	const statusProps = {
		author: author.name,
		createdAt,
		updatedAt,
		wordCount,
	};

	return (
		<>
			{thisArticle && (
				<GridContainer layout='articlePage'>
					<ContentContainer direction='up'>
						<Article>
							<Article.Header>
								<Article.Title>{fullTitle && fullTitle}</Article.Title>
								<Article.Subtitle>{subtitle && subtitle}</Article.Subtitle>
								<StatusBar shortBar='false' statusProps={statusProps} />
							</Article.Header>
							{contentBlocks.map((block, index) => {
								return (
									<Article.Block key={index}>
										<Article.Content>
											{block.images.map((img, index) => (
												<Article.Image
													key={index}
													path={img}
													transformation={[{ width: 500 }]}
												/>
											))}
										</Article.Content>
										<Article.Content>
											{block.text.map((txt, index) => (
												<Article.Paragraph key={index}>{txt}</Article.Paragraph>
											))}
										</Article.Content>
									</Article.Block>
								);
							})}
							<ChefRecommends>
								<ChefRecommends.Inner>
									<ChefRecommends.Column>
										{specificAuthor ? (
											<ChefRecommends.Image
												path={specificAuthor.authorImage}
												transformation={[{ width: 150 }]}
											/>
										) : (
											<img src='https://rough-recipes-media.s3.amazonaws.com/sample-writer.png' />
										)}
									</ChefRecommends.Column>
									<ChefRecommends.Column>
										<ChefRecommends.Title>
											{recommendations.title}
										</ChefRecommends.Title>
										{recommendations.content.map((rec, index) => (
											<ChefRecommends.Recommendation key={index}>
												{rec}
											</ChefRecommends.Recommendation>
										))}
									</ChefRecommends.Column>
								</ChefRecommends.Inner>
							</ChefRecommends>
							<Article.CallToAction to={ARTICLES}>
								discover more articles
							</Article.CallToAction>
						</Article>
					</ContentContainer>
					<SidebarContainer direction='center'>
						<Author>
							<Author.Inner>
								{specificAuthor ? (
									<Author.Image
										path={specificAuthor.authorImage}
										transformation={[{ width: 150 }]}
									/>
								) : (
									<img src='/images/sample-writer.png' />
								)}
								<Author.Title>about the writer</Author.Title>
								<Author.Bio>
									<Author.Paragraph>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Reprehenderit ullam aspernatur fugit blanditiis maiores
										rerum quas nihil nulla! Dolor, nihil saepe ipsa beatae
										laborum sed?
									</Author.Paragraph>
									<Author.Paragraph>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Reprehenderit ullam aspernatur fugit blanditiis maiores
										rerum quas nihil nulla! Dolor, nihil saepe ipsa beatae
										laborum sed?
									</Author.Paragraph>
								</Author.Bio>
							</Author.Inner>
						</Author>
					</SidebarContainer>
				</GridContainer>
			)}
		</>
	);
	// }
}
