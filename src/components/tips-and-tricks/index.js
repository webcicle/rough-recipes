import {
	Container,
	Header,
	Button,
	Content,
	ListItem,
	List,
	Text,
} from './styles/tips-and-tricks';

export default function TipsAndTricks({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

TipsAndTricks.Header = function TipsAndTricksHeader({
	children,
	...restProps
}) {
	return <Header {...restProps}>{children}</Header>;
};

TipsAndTricks.Button = function TipsAndTricksButton({
	children,
	...restProps
}) {
	return <Button {...restProps}>{children}</Button>;
};

TipsAndTricks.Content = function TipsAndTricksContent({
	children,
	...restProps
}) {
	return <Content {...restProps}>{children}</Content>;
};

TipsAndTricks.List = function TipsAndTricksList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

TipsAndTricks.ListItem = function TipsAndTricksListItem({
	children,
	...restProps
}) {
	return <ListItem {...restProps}>{children}</ListItem>;
};

TipsAndTricks.Text = function TipsAndTricksText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};
