import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Header, Hero } from '../components';
import { HOME } from '../constants/routes';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../constants/screen-sizes';

export default function Landing() {
	let heroImage = '/images/hero-img-background-mobile.png';
	if (window.innerWidth > TABLET_WIDTH) {
		heroImage = '/images/hero-img-background-tablet.png';
	}
	if (window.innerWidth > DESKTOP_WIDTH) {
		heroImage = '/images/hero-img-background-desktop.png';
	}

	let heroTextImage = '/images/text/hero-text-mobile.png';
	if (window.innerWidth > TABLET_WIDTH) {
		heroTextImage = '/images/text/hero-text-tablet.png';
	}
	if (window.innerWidth > DESKTOP_WIDTH) {
		heroTextImage = '/images/text/hero-text-desktop.png';
	}

	console.log(heroImage);

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
						src='/images/desktop-hover-overlay-hero.png'
					/>
					<Hero.TextImage src={heroTextImage} />
				</Hero.ImageContainer>
				<Hero.Logo
					open={enterOpen}
					onClick={menuClick}
					layout='landing'
					src={'/images/logo-main.png'}>
					<Hero.LogoText
						open={enterOpen}
						src={'/images/text/hero-enter-prompt.png'}
					/>
				</Hero.Logo>
			</Hero>
		</>
	);
}
