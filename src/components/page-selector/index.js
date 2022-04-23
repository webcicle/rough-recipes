import React from 'react';
import {
	Container,
	PageSelectorNumb,
	PageSelectorDirecton,
	NumberButtons,
	Image,
} from './styles/page-selector';

export default function PageSelector({ pages, children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

PageSelector.NumberButtons = function PageSelectorNumberButtons({
	children,
	...restProps
}) {
	return <NumberButtons {...restProps}>{children}</NumberButtons>;
};

PageSelector.PageSelectorNumb = function PageSelectorPageSelectorNumb({
	children,
	...restProps
}) {
	return <PageSelectorNumb {...restProps}>{children}</PageSelectorNumb>;
};

PageSelector.PageSelectorDirection =
	function PageSelectorPageSelectorDirection({
		id,
		src,
		children,
		...restProps
	}) {
		return (
			<PageSelectorDirecton {...restProps}>
				<Image src={src} alt='card-image' id={id} />
			</PageSelectorDirecton>
		);
	};
