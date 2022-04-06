import React from 'react';
import { Container, Title, Post, Value } from './styles/status-bar';

export default function StatusBar({
	shortBar,
	statusProps,
	children,
	...restProps
}) {
	const { author, createdAt, updatedAt } = statusProps;
	const date = createdAt;
	const formatDate = (date) => {
		return date.split('T')[0];
	};

	return (
		<Container {...restProps}>
			<StatusBar.Post>
				<StatusBar.Title>by:</StatusBar.Title>
				<StatusBar.Value>{author}</StatusBar.Value>
			</StatusBar.Post>
			<StatusBar.Post>
				<StatusBar.Title>posted:</StatusBar.Title>
				<StatusBar.Value>{formatDate(createdAt)}</StatusBar.Value>
			</StatusBar.Post>
			{!shortBar && (
				<StatusBar.Post>
					<StatusBar.Title>updated:</StatusBar.Title>
					<StatusBar.Value>{formatDate(updatedAt)}</StatusBar.Value>
				</StatusBar.Post>
			)}
			<StatusBar.Post>
				<StatusBar.Title>10 min</StatusBar.Title>
				<StatusBar.Value>read</StatusBar.Value>
			</StatusBar.Post>
			{children}
		</Container>
	);
}

StatusBar.Title = function StatusBarTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

StatusBar.Post = function StatusBarPost({ children, ...restProps }) {
	return <Post {...restProps}>{children}</Post>;
};

StatusBar.Value = function StatusBarValue({ children, ...restProps }) {
	return <Value {...restProps}>{children}</Value>;
};
