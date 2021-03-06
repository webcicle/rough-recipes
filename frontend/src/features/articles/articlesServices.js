import axios from 'axios';

const API_URL = '/api/articles';

const getAllArticles = async () => {
	try {
		const result = await axios.get(API_URL);
		if (result.data) {
			localStorage.setItem('articles', JSON.stringify(result.data));
			return result.data;
		}
		return;
	} catch (error) {
		throw new Error({
			message: 'There was an error getting the articles:',
			error,
		});
	}
};

const getLatestArticles = async () => {
	try {
		const result = await axios.get(`${API_URL}/latest`);
		if (result.data) {
			localStorage.setItem('articles', JSON.stringify(result.data));
			return result.data;
		}
	} catch (error) {
		throw new Error({
			message: 'There was an error getting the articles:',
			error,
		});
	}
};

const articleServices = {
	getAllArticles,
	getLatestArticles,
};

export default articleServices;
