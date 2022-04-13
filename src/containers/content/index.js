import { Main, Title } from './styles/content';
import * as SCREEN_SIZES from '../../constants/screen-sizes.js';

const { TABLET_WIDTH, DESKTOP_WIDTH } = SCREEN_SIZES;

export default function ContentContainer({
	direction,
	children,
	...restProps
}) {
	return (
		<Main direction={direction} {...restProps}>
			{children}
		</Main>
	);
}

ContentContainer.Title = function ContentContainerTitle({
	children,
	...restProps
}) {
	return <Title {...restProps}>{children}</Title>;
};
