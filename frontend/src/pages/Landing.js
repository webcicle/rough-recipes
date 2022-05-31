import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components';
import { HOME } from '../constants/routes';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../constants/screen-sizes';

export default function Landing() {
	let heroImage =
		'https://rough-recipes-media.s3.amazonaws.com/hero-img-background-mobile.png';
	if (window.innerWidth > TABLET_WIDTH) {
		heroImage =
			'https://rough-recipes-media.s3.amazonaws.com/hero-img-background-tablet.png';
	}
	if (window.innerWidth > DESKTOP_WIDTH) {
		heroImage =
			'https://rough-recipes-media.s3.amazonaws.com/hero-img-background-desktop.png';
	}

	let heroTextImage =
		'https://rough-recipes-media.s3.amazonaws.com/text/hero-text-mobile.png';
	if (window.innerWidth > TABLET_WIDTH) {
		heroTextImage =
			'https://rough-recipes-media.s3.amazonaws.com/text/hero-text-tablet.png';
	}
	if (window.innerWidth > DESKTOP_WIDTH) {
		heroTextImage =
			'https://rough-recipes-media.s3.amazonaws.com/text/hero-text-desktop.png';
	}

	const [enterOpen, setEnterOpen] = useState(false);
	const navigate = useNavigate();

	const menuClick = () => {
		if (!enterOpen) {
			setEnterOpen(true);
			return;
		}
		return navigate(HOME);
	};

	return (
		<>
			<Hero open={enterOpen}>
				<Hero.ImageContainer>
					<Hero.Image src={heroImage} />
					<Hero.Overlay
						open={enterOpen}
						src='https://rough-recipes-media.s3.amazonaws.com/text/desktop-hover-overlay-hero.png'
					/>
					<Hero.TextImage src={heroTextImage} />
				</Hero.ImageContainer>
				<Hero.Logo
					open={enterOpen}
					onClick={menuClick}
					layout='landing'
					src={'https://rough-recipes-media.s3.amazonaws.com/logo-main.png'}>
					<Hero.LogoText
						open={enterOpen}
						src='https://rough-recipes-media.s3.amazonaws.com/text/hero-enter-prompt.png'
					/>
				</Hero.Logo>
			</Hero>
		</>
	);
}
