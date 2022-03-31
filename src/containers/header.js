import { useState } from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

// const { Text, Button, Logo, Menu, LinksContainer, Link } = Header;

export default function HeaderContainer({ title }) {
	const screenSize = 1330;
	const overlayImage = '/images/desktop-hover-overlay-home.png';
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<Header>
			<Header.Container>
				{screenSize > 1200 ? (
					<Header.Text>recipes</Header.Text>
				) : (
					<Header.Button icon='/images/icons/edit-list.png' />
				)}
			</Header.Container>
			<Header.Logo
				src='/images/logo-main.png'
				menuOpen={menuOpen}
				onClick={() => setMenuOpen((prev) => !prev)}
			/>
			<Header.Menu overlay={overlayImage} menuOpen={menuOpen}>
				<Header.LinksContainer>
					<Header.Link to={ROUTES.HOME}>Home</Header.Link>
					<Header.Link to={ROUTES.RECIPES}>All Recipes</Header.Link>
					<Header.Link to={ROUTES.PROFILE}>Profile Page</Header.Link>
					<Header.Link to={ROUTES.ARTICLES}>Articles</Header.Link>
				</Header.LinksContainer>
			</Header.Menu>
		</Header>
	);
}
