import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: auto;
	width: 80%;
	margin-inline: auto;
`;

export const NumberButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 0.6em;
	width: 100%;
`;

export const PageSelectorNumb = styled.button`
	background-color: var(--primary-color-light);
	border-radius: 50%;
	border: 0;
	height: ${({ page, id }) =>
		page === id ? 'clamp(50px, 16vw, 70px)' : 'clamp(40px, 11vw, 60px)'};
	aspect-ratio: 1;
	font-family: var(--primary-font);
	font-size: ${({ page, id }) =>
		page === id ? 'var(--fs-step-3)' : 'var(--fs-step-2)'};
	cursor: pointer;
`;

export const PageSelectorDirecton = styled.button`
	background-color: var(--primary-color-light);
	border-radius: 50%;
	border: 0;
	height: 5rem;
	aspect-ratio: 1;
	position: relative;
	display: grid;
	place-items: center;
	cursor: pointer;
`;

export const Image = styled.img`
	max-width: 100%;
	width: 50%;

	transform: ${({ id }) =>
		id == 'left' ? 'translate(-10%)' : 'translate(10%)'};
`;
