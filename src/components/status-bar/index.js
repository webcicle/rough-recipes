import React from 'react';
import { Container, Title, Value } from './styles/status-bar';

export default function StatusBar({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

StatusBar.Title = function StatusBarTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

StatusBar.Container = function StatusBarContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

StatusBar.Value = function StatusBarValue({ children, ...restProps }) {
	return <Value {...restProps}>{children}</Value>;
};
