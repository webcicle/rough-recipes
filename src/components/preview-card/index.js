import { Container, Link } from './styles/preview-card';

export default function PreviewCard({
	image,
	slug,
	title,
	shortTitle,
	to,
	children,
	...restProps
}) {
	return (
		<Container {...restProps}>
			<img src={image} alt={shortTitle ? shortTitle : title} title={title} />
			<Link to={to}>{title}</Link>
		</Container>
	);
}
