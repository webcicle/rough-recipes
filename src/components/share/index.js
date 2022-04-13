import { Container, Link } from './styles/share';

export default function Share({ children, ...restProps }) {
	return <Container>{children}</Container>;
}

Share.Link = function ShareLink({ icon, href, children, ...restProps }) {
	return (
		<Link href={href} {...restProps}>
			{children}
		</Link>
	);
};
