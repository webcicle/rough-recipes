import axios from 'axios';

const API_URL = '/api/recipes/latest/';

const getLatestRecipes = async () => {
	const response = await axios.get(API_URL);
	if (response.data.data) {
		return response.data.data;
	}

	throw new Error('Latest recipes could not be loaded');
};

const latestRecipesServices = {
	getLatestRecipes,
};

export default latestRecipesServices;
