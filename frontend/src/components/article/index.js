import {
	Container,
	Header,
	Title,
	Block,
	Content,
	Paragraph,
	Image,
	Link,
	Subtitle,
} from './styles/article';

export default function Article({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Article.Header = function ArticleHeader({ children, ...restProps }) {
	return <Header {...restProps}>{children}</Header>;
};

Article.Title = function ArticleTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Article.Subtitle = function ArticleSubtitle({ children, ...restProps }) {
	return <Subtitle {...restProps}>{children}</Subtitle>;
};

Article.Block = function ArticleBlock({ children, ...restProps }) {
	return <Block {...restProps}>{children}</Block>;
};

Article.Paragraph = function ArticleParagraph({ children, ...restProps }) {
	return <Paragraph {...restProps}>{children}</Paragraph>;
};

Article.CallToAction = function ArticleCallToAction({
	children,
	...restProps
}) {
	return <Link {...restProps}>{children}</Link>;
};

Article.Content = function ArticleContent({ children, ...restProps }) {
	return <Content {...restProps}>{children}</Content>;
};

Article.Image = function ArticleImage({ children, ...restProps }) {
	return <Image {...restProps} />;
};
