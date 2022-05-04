import {
	Container,
	Title,
	Input,
	Details,
	Detail,
	DetailTitle,
	DetailValue,
	Edits,
	Button,
	List,
	ListItem,
	Link,
} from './styles/profile';
import { ALL_RECIPES } from '../../constants/routes';

export default function Profile({ justify, children, ...restProps }) {
	return (
		<Container justify={justify} {...restProps}>
			{children}
		</Container>
	);
}

Profile.Title = function ProfileTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Profile.Details = function ProfileDetails({ children, ...restProps }) {
	return <Details {...restProps}>{children}</Details>;
};

Profile.Detail = function ProfileDetail({ children, ...restProps }) {
	return <Detail {...restProps}>{children}</Detail>;
};

Profile.DetailTitle = function ProfileDetailTitle({ children, ...restProps }) {
	return <DetailTitle {...restProps}>{children}</DetailTitle>;
};

Profile.DetailValue = function ProfileDetailValue({ children, ...restProps }) {
	return <DetailValue {...restProps}>{children}</DetailValue>;
};

Profile.Edits = function ProfileEdits({ children, ...restProps }) {
	return <Edits {...restProps}>{children}</Edits>;
};

Profile.EditButton = function ProfileEditButton({
	to,
	children,
	...restProps
}) {
	return (
		<Button to={to} {...restProps}>
			{children}
		</Button>
	);
};

Profile.Input = function ProfileInput({ ...restProps }) {
	return <Input {...restProps} />;
};

Profile.List = function ProfileList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

Profile.ListItem = function ProfileListItem({
	recipe,
	children,
	...restProps
}) {
	const { longTitel, slug } = recipe;
	return (
		<ListItem {...restProps}>
			<Link to={`${ALL_RECIPES}/${slug}`}>{children}</Link>
		</ListItem>
	);
};
