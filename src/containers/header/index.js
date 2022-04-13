import { useState } from 'react';
import { Header } from '../../components';
import { useNavigate, useLocation } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { useSelector } from 'react-redux';
import { DESKTOP_WIDTH } from '../../constants/screen-sizes';

export default function HeaderContainer({ title }) {
	const overlayImage = '/images/desktop-hover-overlay-home.png';
	const [menuOpen, setMenuOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const { user } = useSelector((state) => state.auth);

	const linkClick = (to) => {
		setMenuOpen(false);
		navigate(to, location.search);
	};

	return (
		<Header>
			<Header.Container>
				{window.innerWidth > DESKTOP_WIDTH && (
					<Header.Text>recipes</Header.Text>
				)}
			</Header.Container>
			<Header.Logo
				src='/images/logo-main.png'
				menuOpen={menuOpen}
				onClick={() => setMenuOpen((prev) => !prev)}
			/>
			<Header.Menu menuOpen={menuOpen} onClick={() => setMenuOpen(false)}>
				<Header.LinksContainer>
					<Header.Link onClick={() => linkClick(ROUTES.HOME)}>Home</Header.Link>
					<Header.Link onClick={() => linkClick(ROUTES.ARTICLES)}>
						Articles
					</Header.Link>
					<Header.Link
						name='profile'
						onClick={() => linkClick(user ? ROUTES.PROFILE : ROUTES.LOGIN)}>
						Profile Page
					</Header.Link>
					<Header.Link onClick={() => linkClick(ROUTES.ALL_RECIPES)}>
						All Recipes
					</Header.Link>
				</Header.LinksContainer>
			</Header.Menu>
		</Header>
	);
}
