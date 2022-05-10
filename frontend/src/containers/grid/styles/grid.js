import styled from 'styled-components/macro';
import {
	DESKTOP_WIDTH,
	LORG_WIDTH,
	TABLET_WIDTH,
} from '../../../constants/screen-sizes';

export const Container = styled.div`
	/* --recipePage: {
		display: grid;
		${({ columns }) => (columns === 3 ? '' : 'grid-template-columns: 1fr 12vw')};
		column-gap: 2rem;
		margin-inline: auto;
		max-width: calc(${LORG_WIDTH}px - 4rem);
	} */

	/* @media (min-width: ${TABLET_WIDTH}px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
	} */

	@media (min-width: ${DESKTOP_WIDTH}px) {
		max-width: ${({ layout }) =>
			layout === 'articlePage' ? `calc(${LORG_WIDTH}px - 4rem)` : 'unset'};

		${({ layout }) =>
			layout == 'articlePage' &&
			'display: grid;column-gap: 2rem;margin-inline: auto;grid-template-columns: 1fr 12vw; max-width: calc(${LORG_WIDTH}px - 4rem);'}

		color: unset;

		/* --height-minus-nav: calc(100vh - 4rem);


      // BELOW HAS BEEN TRANSFERRED TO THE ARTICLES COMPONENT

		min-height: var(--height-minus-nav);
		width: 100%;
		grid-template-columns: repeat(10, 1fr);
		grid-template-rows:
			calc(var(--height-minus-nav) / 4) calc(var(--height-minus-nav) / 4) calc(
				var(--height-minus-nav) / 4
			)
			calc(var(--height-minus-nav) / 4)
			var(--height-minus-nav);
		grid-template-areas:
			'a a b b e e e'
			'a a c d e e e'; */
	}
`;
