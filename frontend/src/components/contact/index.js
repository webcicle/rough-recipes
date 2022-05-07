import {
	Container,
	Input,
	Text,
	Title,
	Link,
	Button,
	Footer,
} from './styles/contact';

export default function Contact({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Contact.Input = function ContactInput({ children, ...restProps }) {
	return <Input {...restProps}>{children}</Input>;
};

Contact.Footer = function ContactFooter({ children, ...restProps }) {
	return <Footer {...restProps}>{children}</Footer>;
};

Contact.Title = function ContactTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Contact.Text = function ContactText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Contact.Link = function ContactLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

Contact.Button = function ContactButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};
