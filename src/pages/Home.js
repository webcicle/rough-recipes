import ContentContainer from '../containers/content';
import { Latest } from '../components';
import RecipeCard from '../components/recipe-card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../constants/screen-sizes';
import { ALL_RECIPES } from '../constants/routes';

function Home() {
	const [latestRecipes, setLatestRecipes] = useState([]);
	const API_URL = '/api/recipes/latest';

	const getRecipes = async () => {
		try {
			const response = await axios.get(API_URL);
			const data = response.data.data;
			if (
				window.innerWidth > TABLET_WIDTH &&
				window.innerWidth < DESKTOP_WIDTH
			) {
				data.length = 3;
			}
			setLatestRecipes(data);
		} catch (error) {
			throw new Error('No such data available');
		}
	};

	useEffect(async () => {
		getRecipes();
	}, []);

	return (
		<ContentContainer direction='up'>
			<Latest.Container>
				<Latest.Title>Latest recipes</Latest.Title>
				<Latest.Grid>
					{latestRecipes.map((recipe) => {
						return <RecipeCard key={recipe._id} recipe={recipe} />;
					})}
				</Latest.Grid>
				<Latest.Link to={ALL_RECIPES}>explore all</Latest.Link>
			</Latest.Container>
		</ContentContainer>
	);
}

export default Home;
