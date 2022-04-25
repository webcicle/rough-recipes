import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
	padding-inline: 1em;
	margin-bottom: 1.4em;

	img {
		width: 100%;
		height: 8rem;
		margin-bottom: 0.4em;
		object-fit: cover;
		border-radius: var(--image-border-radius);
	}
`;

export const Link = styled(RouterLink)`
	font-family: var(--primary-font);
	font-size: clamp(12px, 0.9rem, 18px);
	word-wrap: break-word;
	color: var(--dark-grey-color);
	text-decoration: none;
`;
