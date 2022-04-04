import {
	Container,
	InputTitle,
	Input,
	InputWrapper,
	Inner,
	SubmitButton,
	Title,
	Text,
	Link,
} from './styles/form';

export default function Form({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
}

Form.Container = function FormContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Form.InputTitle = function FormInputTitle({ children, ...restProps }) {
	return <InputTitle {...restProps}>{children}</InputTitle>;
};

Form.InputWrapper = function FormInputWrapper({ children, ...restProps }) {
	return <InputWrapper {...restProps}>{children}</InputWrapper>;
};

Form.Input = function FormInput({ ...restProps }) {
	return <Input {...restProps} />;
};

Form.SubmitButton = function FormSubmitButton({ children, ...restProps }) {
	return <SubmitButton {...restProps}>{children}</SubmitButton>;
};
Form.Text = function FormText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};
Form.Link = function FormLink({ to, children, ...restProps }) {
	return (
		<Link to={to} {...restProps}>
			{children}
		</Link>
	);
};
