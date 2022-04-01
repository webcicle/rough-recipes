import React from 'react';
import {
	Text,
	Button,
	Container,
	Icon,
	Logo,
	LogoContainer,
	Menu,
	LinksContainer,
	Link,
} from './styles/header';

function Header({ children, ...restProps }) {
	return <>{children}</>;
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
	return <Container>{children}</Container>;
};

Header.Logo = function HeaderLogo({ src, menuOpen, ...restProps }) {
	return (
		<LogoContainer menu={menuOpen}>
			<Logo {...restProps} src={src} />
		</LogoContainer>
	);
};

Header.Text = function HeaderText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Header.Button = function HeaderButton({ icon, alt, children, ...restProps }) {
	return (
		<Button {...restProps}>
			<Icon src={icon} alt={alt} />
		</Button>
	);
};

Header.Menu = function HeaderMenu({ children, ...restProps }) {
	return <Menu {...restProps}>{children}</Menu>;
};

Header.LinksContainer = function HeaderLinksContainer({
	children,
	...restProps
}) {
	return <LinksContainer {...restProps}>{children}</LinksContainer>;
};

Header.Link = function HeaderLink({ to, children, ...restProps }) {
	return (
		<Link {...restProps} to={to}>
			{children}
		</Link>
	);
};

export default Header;
