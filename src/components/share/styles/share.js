import styled from 'styled-components/macro';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../../../constants/screen-sizes';

export const Container = styled.div`
	display: flex;
	margin-bottom: 0;
	margin-top: 1rem;

	.react-share__ShareButton > svg {
		width: 45px;

		@media (min-width: ${DESKTOP_WIDTH}px) {
			width: 30px;
		}
	}
	@media (min-width: ${TABLET_WIDTH}px) {
		margin-top: 0;
	}
	@media (min-width: ${DESKTOP_WIDTH}px) {
		margin-block: 1em;
	}

	@media (max-width: ${DESKTOP_WIDTH}px) {
		column-gap: 0.2em;
	}
`;

export const Link = styled.a`
	display: block;
	z-index: 222;
	color: black;

	img {
		width: 100%;
	}

	.svg-inline--fa {
		color: var(--grey-color);
	}
`;

{
	/* <Share.Link href='#'>
   <FontAwesomeIcon size='xl' icon={faFacebook} />
</Share.Link>
<Share.Link href='#'>
   <FontAwesomeIcon size='xl' icon={faTwitter} />
</Share.Link>
<Share.Link href='#'>
   <FontAwesomeIcon size='xl' icon={faAt} />
</Share.Link> */
}
