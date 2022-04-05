import ContentContainer from '../containers/content';
import { Latest } from '../components';
import RecipeCard from '../components/recipe-card';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Home() {
	const [latestRecipes, setLatestRecipes] = useState([]);
	const API_URL = '/api/recipes';

	const getRecipes = async () => {
		try {
			return await axios.get(API_URL).data;
		} catch (error) {
			throw new Error('No such data available');
		}
	};

	useEffect(() => {
		setLatestRecipes(() => getRecipes());
		console.log(latestRecipes);
	}, []);

	return (
		<ContentContainer direction='up'>
			<Latest.Title>Latest recipes</Latest.Title>
			<Latest.Grid>
				{/* {latestRecipes.map(({ src, alt }) => {
					return <RecipeCard src={src} alt={alt} />;
				})} */}
			</Latest.Grid>
		</ContentContainer>
	);
}

export default Home;
