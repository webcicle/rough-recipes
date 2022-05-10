import {
	Container,
	ImageContainer,
	Logo,
	LogoContainer,
	LogoText,
	Image,
	Overlay,
	TextImage,
} from './styles/hero';

export default function Hero({ open, children, ...restProps }) {
	return (
		<Container open={open} {...restProps}>
			{children}
		</Container>
	);
}

Hero.ImageContainer = function HeroImageContainer({ children, ...restProps }) {
	return <ImageContainer {...restProps}>{children}</ImageContainer>;
};

Hero.Image = function HeroImage({ src, children, ...restProps }) {
	return (
		<Image src={src} {...restProps}>
			{children}
		</Image>
	);
};

Hero.TextImage = function HeroTextImage({ src, children, ...restProps }) {
	return <TextImage src={src} {...restProps} />;
};

Hero.Overlay = function HeroOverlay({ open, children, ...restProps }) {
	return (
		<Overlay open={open} {...restProps}>
			{children}
		</Overlay>
	);
};

Hero.Logo = function HeroLogo({ open, src, menuOpen, children, ...restProps }) {
	return (
		<LogoContainer open={open}>
			<Logo open={open} {...restProps} src={src} />
			{children}
		</LogoContainer>
	);
};

Hero.LogoText = function HeroLogoText({ open, ...restProps }) {
	return <LogoText open={open} {...restProps} />;
};
