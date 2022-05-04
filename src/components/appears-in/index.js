import {
	Container,
	Column,
	Title,
	TagsContainer,
	Tag,
} from './styles/appears-in';

export default function AppearsIn({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

AppearsIn.Title = function AppearsInTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

AppearsIn.TagsContainer = function AppearsInTagsContainer({
	children,
	...restProps
}) {
	return <TagsContainer {...restProps}>{children}</TagsContainer>;
};

AppearsIn.Tag = function AppearsInTag({ children, ...restProps }) {
	return <Tag {...restProps}>{children}</Tag>;
};

AppearsIn.Column = function AppearsInColumn({ children, ...restProps }) {
	return <Column {...restProps}>{children}</Column>;
};
