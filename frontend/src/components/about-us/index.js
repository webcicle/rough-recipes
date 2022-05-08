import { Container, Title, Subtitle, Paragraph } from './styles/about-us';

export default function AboutUs({ children, ...restProps }) {
	return (
		<Container div {...restProps}>
			{children}
		</Container>
	);
}

AboutUs.Title = function AboutTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

AboutUs.Subtitle = function AboutSubtitle({ children, ...restProps }) {
	return <Subtitle {...restProps}>{children}</Subtitle>;
};

AboutUs.Paragraph = function AboutParagraph({ title, children, ...restProps }) {
	return (
		<Paragraph {...restProps}>
			{title && <span>{title}: </span>}
			{children}
		</Paragraph>
	);
};
