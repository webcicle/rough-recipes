import {
	Container,
	Image,
	Title,
	Bio,
	Paragraph,
	Inner,
} from './styles/author';

export default function Author({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Author.Title = function AuthorTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Author.Bio = function AuthorBio({ children, ...restProps }) {
	return <Bio {...restProps}>{children}</Bio>;
};

Author.Inner = function AuthorInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Author.Paragraph = function AuthorParagraph({ children, ...restProps }) {
	return <Paragraph {...restProps}>{children}</Paragraph>;
};

Author.Image = function AuthorImage({ children, ...restProps }) {
	return <Image {...restProps} />;
};
