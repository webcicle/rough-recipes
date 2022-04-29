import React from 'react';
import { Container, Title, Post, Value } from './styles/status-bar';

export default function StatusBar({
	shortBar,
	statusProps,
	children,
	...restProps
}) {
	const { author, createdAt, updatedAt, category, wordCount } = statusProps;
	const formatDate = (date) => {
		return date.split('T')[0];
	};

	return (
		<Container shortBar={shortBar} {...restProps}>
			<StatusBar.Post shortBar={shortBar}>
				<StatusBar.Title>by:</StatusBar.Title>
				<StatusBar.Value>{author}</StatusBar.Value>
			</StatusBar.Post>
			<StatusBar.Post shortBar={shortBar}>
				<StatusBar.Title>posted:</StatusBar.Title>
				<StatusBar.Value>{createdAt && formatDate(createdAt)}</StatusBar.Value>
			</StatusBar.Post>
			{shortBar === 'false' && (
				<StatusBar.Post shortBar={shortBar}>
					<StatusBar.Title>updated:</StatusBar.Title>
					<StatusBar.Value>
						{updatedAt && formatDate(updatedAt)}
					</StatusBar.Value>
				</StatusBar.Post>
			)}
			<StatusBar.Post shortBar={shortBar}>
				<StatusBar.Title>
					{wordCount ? Math.ceil(wordCount / 160) : 5} min
				</StatusBar.Title>
				<StatusBar.Value>read</StatusBar.Value>
			</StatusBar.Post>
			{children}
		</Container>
	);
}

StatusBar.Title = function StatusBarTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

StatusBar.Post = function StatusBarPost({ shortBar, children, ...restProps }) {
	return (
		<Post shortBar={shortBar} {...restProps}>
			{children}
		</Post>
	);
};

StatusBar.Value = function StatusBarValue({ children, ...restProps }) {
	return <Value {...restProps}>{children}</Value>;
};
