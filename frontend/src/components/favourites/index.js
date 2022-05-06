import { Container, Button, Icon, Text } from './styles/favourites';

export default function Favourites({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Favourites.Button = function FavouritesButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Favourites.Icon = function FavouritesIcon({
	icon,
	alt,
	children,
	...restProps
}) {
	return (
		<Icon {...restProps} src={icon} alt={alt}>
			{children}
		</Icon>
	);
};

Favourites.Text = function FavouritesText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};
