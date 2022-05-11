import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: ${(props) => (props.shortBar == 'false' ? '0.9em' : '0.4em')};
	font-size: clamp(10px, 2vh, 15px);
`;

export const Post = styled.div`
	display: ${(props) => (props.shortBar == 'false' ? 'flex' : 'block')};
	column-gap: 0.3em;
`;

export const Title = styled.p`
	font-weight: bold;
`;

export const Value = styled.p``;
