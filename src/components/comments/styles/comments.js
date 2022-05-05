import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Comment = styled.li`
	display: flex;
	flex-direction: column;
	row-gap: 0.3em;
	padding-block: 0.6em;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);

	div {
		display: flex;
		align-items: center;
		column-gap: 0.5em;
	}

	.user {
		font-weight: bold;
	}

	.date {
		font-style: italic;
		font-size: var(--fs-step--2);
	}
`;

export const List = styled.ul`
	margin-inline: 2rem;
	padding-left: 0;
	padding-right: 1em;
	max-height: 150px;
	overflow-y: scroll;
`;

export const Text = styled.p``;

export const Input = styled.textarea`
	margin-inline: 2rem;
	width: calc(100% - 4rem);
	resize: none;
	min-height: 5rem;
	border: none;
	border-radius: var(--image-border-radius);
	padding: 0.5em 0.7em;
	font-family: var(--secondary-font);
	font-size: var(--fs-step--1);

	&:focus {
		outline: none;
		border: none;
	}
`;

export const Footer = styled.footer`
	display: flex;
	margin-inline: 2rem;
	margin-top: 0.4em;
`;

export const Button = styled.button`
	margin-left: auto;
	border-radius: var(--image-border-radius);
	background-color: var(--primary-color);
	border: 2px solid var(--primary-color);
	color: var(--off-white-color);
	padding: 0.5em 0.6em;
	font-family: var(--secondary-font);
	transition: 250ms ease-in;
	cursor: pointer;

	&:hover {
		background-color: var(--off-white-color);
		border: 2px solid var(--dark-grey-color);
		color: var(--dark-grey-color);
	}
`;
