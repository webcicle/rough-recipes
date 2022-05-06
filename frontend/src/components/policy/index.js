import React from 'react';
import { Container, SmallTitle, Paragraph, Title } from './styles/policy';

export default function Policy({ children, ...restProps }) {
	return <Container>{children}</Container>;
}

Policy.SmallTitle = function PolicySmallTitle({ children, ...restProps }) {
	return <SmallTitle {...restProps}>{children}</SmallTitle>;
};

Policy.Paragraph = function PolicyParagraph({ children, ...restProps }) {
	return <Paragraph {...restProps}>{children}</Paragraph>;
};

Policy.Title = function PolicyTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
