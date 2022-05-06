import { Container, Column, Image, Link, RouterLink } from './styles/footer';

export default function Footer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Footer.Column = function FooterColumn({ children, ...restProps }) {
	return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ href, children, ...restProps }) {
	return (
		<Link href={href} {...restProps}>
			{children}
		</Link>
	);
};

Footer.RouterLink = function FooterRouterLink({ to, children, ...restProps }) {
	return (
		<RouterLink to={to} {...restProps}>
			{children}
		</RouterLink>
	);
};

Footer.Image = function FooterImage({ children, ...restProps }) {
	return <Image {...restProps} />;
};
