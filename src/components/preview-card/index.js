import { Container, Link } from './styles/preview-card';

export default function PreviewCard({
	image,
	slug,
	title,
	to,
	children,
	...restProps
}) {
	return (
		<Container {...restProps}>
			<img src={image} alt={slug} title={title} />
			<Link to={to}>{title}</Link>
		</Container>
	);
}
