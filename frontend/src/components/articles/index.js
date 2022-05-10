import {
	Container,
	ImageKitImage,
	ImageContainer,
	Overlay,
	OverlayTitle,
	OverlayDescription,
} from './styles/articles';

import React from 'react';

export default function Articles({ children, ...restProps }) {
	return <Container>{children}</Container>;
}

Articles.ImageKitImage = function ArticleImageKitImage({
	src,
	alt,
	id,
	...restProps
}) {
	return <ImageKitImage id={id} src={src} alt={alt} {...restProps} />;
};

Articles.ImageContainer = function ArticleImageContainer({
	children,
	...restProps
}) {
	return <ImageContainer {...restProps}>{children}</ImageContainer>;
};

Articles.Overlay = function ArticleOverlay({ children, ...restProps }) {
	return <Overlay {...restProps}>{children}</Overlay>;
};

Articles.OverlayTitle = function ArticleOverlayTitle({
	children,
	...restProps
}) {
	return <OverlayTitle {...restProps}>{children}</OverlayTitle>;
};

Articles.OverlayDescription = function ArticleOverlayDescription({
	children,
	...restProps
}) {
	return <OverlayDescription {...restProps}>{children}</OverlayDescription>;
};
