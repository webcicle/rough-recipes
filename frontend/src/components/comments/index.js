import {
	Container,
	Comment,
	List,
	Text,
	Input,
	Footer,
	Button,
} from './styles/comments';

export default function Comments({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Comments.Comment = function CommentsComment({
	comment,
	children,
	...restProps
}) {
	const date = comment.createdAt.split('T');
	const hours =
		parseInt(date[1].slice(0, 5).split(':')[0]) +
		new Date().getTimezoneOffset() / -60;
	const minutes = parseInt(date[1].slice(0, 5).split(':')[1]);

	return (
		<Comment {...restProps}>
			<div>
				<p className='user'>{`${comment.user}`}</p>
				<p className='date'>{`(${date[0]}, ${hours}:${minutes})`}</p>
			</div>
			<p className='comment'>{comment.comment}</p>
			{children}
		</Comment>
	);
};

Comments.List = function CommentsList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

Comments.Text = function CommentsText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Comments.Input = function CommentsInput({ children, ...restProps }) {
	return <Input {...restProps} />;
};

Comments.Footer = function CommentsFooter({ children, ...restProps }) {
	return <Footer {...restProps}>{children}</Footer>;
};

Comments.Button = function CommentsButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};
