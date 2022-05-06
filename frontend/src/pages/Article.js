import {
	ContentContainer,
	GridContainer,
	SidebarContainer,
} from '../containers';
import { Author, Article, StatusBar, ChefRecommends } from '../components';
import { DESKTOP_WIDTH } from '../constants/screen-sizes';
import { ARTICLES } from '../constants/routes';

const statusProps = {
	author: 'viktor',
	createdAt: '2021-04-06',
	updatedAt: '2022-03-04',
	category: 'techniques',
	wordCount: '1200',
};

export default function ArticlePage() {
	return (
		<>
			<GridContainer>
				<ContentContainer direction='up'>
					<Article>
						<Article.Header>
							<Article.Title>
								stuffing chillies up your butt can make you gay - but is it
								worth it?
							</Article.Title>
							<StatusBar shortBar='false' statusProps={statusProps} />
						</Article.Header>
						<Article.Block>
							<Article.Content>
								<Article.Paragraph>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
								</Article.Paragraph>
								<Article.Paragraph>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
								</Article.Paragraph>
								<Article.Paragraph>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
								</Article.Paragraph>
								<Article.Paragraph>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
								</Article.Paragraph>
							</Article.Content>
							<Article.Content>
								<Article.Image src='/images/chillies-1.jpeg' />
							</Article.Content>
						</Article.Block>
						<Article.Block>
							<ChefRecommends>
								<ChefRecommends.Inner>
									<ChefRecommends.Column>
										<ChefRecommends.Image src='/images/sample-writer.png' />
									</ChefRecommends.Column>
									<ChefRecommends.Column>
										<ChefRecommends.Title>Chef recommends</ChefRecommends.Title>
										<ChefRecommends.Recommendation>
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Reprehenderit ullam aspernatur fugit blanditiis maiores
											rerum quas nihil nulla! Dolor, nihil saepe ipsa beatae
											laborum sed?
										</ChefRecommends.Recommendation>
										<ChefRecommends.Recommendation>
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Reprehenderit ullam aspernatur fugit blanditiis maiores
											rerum quas nihil nulla! Dolor, nihil saepe ipsa beatae
											laborum sed?
										</ChefRecommends.Recommendation>
									</ChefRecommends.Column>
								</ChefRecommends.Inner>
							</ChefRecommends>
						</Article.Block>
						<Article.Block>
							<Article.Content>
								<Article.Image src='/images/chillies-2.jpeg' />
							</Article.Content>
							<Article.Content>
								<Article.Paragraph>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
								</Article.Paragraph>
								<Article.Paragraph>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
								</Article.Paragraph>
								<Article.Paragraph>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
								</Article.Paragraph>
								<Article.Paragraph>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
								</Article.Paragraph>
							</Article.Content>
						</Article.Block>
						<Article.CallToAction to={ARTICLES}>
							discover more recipes
						</Article.CallToAction>
					</Article>
				</ContentContainer>
				<SidebarContainer
					direction={window.innerWidth > DESKTOP_WIDTH ? 'right' : 'center'}>
					<Author>
						<Author.Inner>
							<Author.Image src={'/images/sample-writer.png'} />
							<Author.Title>about the writer</Author.Title>
							<Author.Bio>
								<Author.Paragraph>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
								</Author.Paragraph>
								<Author.Paragraph>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Reprehenderit ullam aspernatur fugit blanditiis maiores rerum
									quas nihil nulla! Dolor, nihil saepe ipsa beatae laborum sed?
								</Author.Paragraph>
							</Author.Bio>
						</Author.Inner>
					</Author>
				</SidebarContainer>
			</GridContainer>
		</>
	);
}
