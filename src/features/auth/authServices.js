import axios from 'axios';

const API_URL = '/api/users/';
const USER_URL = `/api/users/me/`;

const registerNewUser = async (userData) => {
	const response = await axios.post(API_URL, userData);

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}

	return response.data;
};

const loginUser = async (userData) => {
	const user = await axios.post(API_URL + 'login', userData);

	const { id, token, favourites, comments } = user.data;

	console.log(user.data);

	if (user.data) {
		localStorage.setItem(
			'user',
			JSON.stringify({ id, token, favourites, comments })
		);
	}

	return user.data;
};

const logoutUser = () => {
	localStorage.removeItem('user');
};

const editUser = async (favourites, token) => {
	const axiosConfig = {
		headers: { Authorization: `Bearer ${token}` },
	};
	if (favourites && token) {
		const user = await axios.put(
			USER_URL,
			{ favourites: favourites },
			axiosConfig
		);
		const limitedUser = { id: user.data.id, token: user.data.token };

		if (user.data) {
			localStorage.setItem('user', JSON.stringify(user.data));
		}

		return user.data;
	}
};

const authServices = {
	registerNewUser,
	loginUser,
	logoutUser,
	editUser,
};

export default authServices;
