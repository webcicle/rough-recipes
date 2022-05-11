import axios from 'axios';

const API_URL = '/api/authors';

const getAllAuthors = async (id) => {
	try {
		const result = await axios.get(API_URL);
		if (result.data) {
			return result.data;
		}
	} catch (error) {
		throw new Error({
			message: 'There was an error fetching the author',
			error,
		});
	}
};

const createAuthor = async (authorObj) => {
	try {
		const response = await axios.post(API_URL, authorObj);
		return response.data;
	} catch (error) {
		throw new Error('There was an error creating the author');
	}
};

const findAuthor = async (id) => {
	console.log(id);
	try {
		const author = await axios.get(`${API_URL}/${id}`);
		return author.data;
	} catch (error) {
		throw new Error('There was an error fetching the specific author');
	}
};

const authorServices = {
	getAllAuthors,
	createAuthor,
	findAuthor,
};

export default authorServices;
