import {
	Container,
	List,
	ListItem,
	Split,
	Title,
	Header,
} from './styles/grocery-list';

export default function GroceryList({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

GroceryList.List = function GroceryListList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

GroceryList.Title = function GroceryListTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

GroceryList.Split = function GroceryListSplit({ children, ...restProps }) {
	return <Split {...restProps}>{children}</Split>;
};

GroceryList.ListItem = function GroceryListListItem({
	children,
	...restProps
}) {
	return <ListItem {...restProps}>{children}</ListItem>;
};

GroceryList.Header = function GroceryListHeader({ children, ...restProps }) {
	return <Header {...restProps}>{children}</Header>;
};
