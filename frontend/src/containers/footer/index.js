import { Footer } from '../../components';
import { ABOUT, CONTACT, PRIVACY_POLICY, TOS } from '../../constants/routes';
import {
	FACEBOOK_URL,
	INSTAGRAM_URL,
	PINTREST_URL,
	TWITTER_URL,
} from '../../constants/socials';
import { Container } from './styles/footer';

export default function FooterContainer({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Footer>
				<Footer.Column area='a'>
					<Footer.Image
						src='https://rough-recipes-media.s3.amazonaws.com/logo-main.png'
						alt='footer-logo'
					/>
				</Footer.Column>
				<Footer.Column area='b'>
					<Footer.Link href={INSTAGRAM_URL}>Instagram</Footer.Link>
					<Footer.Link href={FACEBOOK_URL}>Facebook</Footer.Link>
					<Footer.Link href={TWITTER_URL}>Twitter</Footer.Link>
					<Footer.Link href={PINTREST_URL}>Pintrest</Footer.Link>
				</Footer.Column>
				<Footer.Column area='c'>
					<Footer.RouterLink to={PRIVACY_POLICY}>
						Privacy Police
					</Footer.RouterLink>
					<Footer.RouterLink to={CONTACT}>Contact Use</Footer.RouterLink>
					<Footer.RouterLink to={ABOUT}>About Rouch Recipes</Footer.RouterLink>
					<Footer.RouterLink to={TOS}>Terms of use</Footer.RouterLink>
				</Footer.Column>
			</Footer>
			{children}
		</Container>
	);
}
