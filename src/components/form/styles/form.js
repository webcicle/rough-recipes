import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 5rem;
`;

export const Title = styled.h1`
	font-family: var(--primary-font);
	font-size: 0.6em;
	text-align: left;
`;

export const Inner = styled.form`
	--form-radius: 6px;
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	outline: 1px solid black;
	padding: 1rem;
	max-width: 300px;
	width: 80vw;
`;

export const InputTitle = styled.p`
	font-size: 0.4rem;
	font-family: var(--primary-font);
	margin-bottom: 0.6em;
	padding-left: 1em;
`;

export const InputWrapper = styled.div``;

export const Input = styled.input`
	width: 100%;
	border-radius: var(--form-radius); //local variable
	border: 1px solid var(--dark-grey-color);
	padding: 0.3em 0.5em;
	font-family: var(--secondary-font);
	font-size: 0.75em;

	&::placeholder {
		font-family: var(--secondary-font);
		font-size: 0.75em;
	}

	&:focus {
		outline: 2px solid var(--primary-color);
	}
`;

export const SubmitButton = styled.button`
	cursor: pointer;
	width: 100%;

	font-family: var(--primary-font);
	font-size: 0.75em;
	letter-spacing: 6px;

	padding: 0.75em;
	border: none;
	border-radius: var(--form-radius); //local variable

	background-color: var(--primary-color);
	color: var(--grey-color);

	&:hover {
		background-color: var(--grey-color);
		color: var(--primary-color);
		transition-property: background-color;
		transition-duration: 100ms;
		transition-timing-function: ease-in;
	}
`;
