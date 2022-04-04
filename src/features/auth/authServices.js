import axios from 'axios';

const API_URL = '/api/users/';

const registerNewUser = async (userData) => {
	const response = await axios.post(API_URL, userData);

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}

	return response.data;
};

const loginUser = async (userData) => {
	const user = await axios.post(API_URL + 'login', userData);

	if (user.data) {
		localStorage.setItem('user', JSON.stringify(user.data));
	}

	return user.data;
};

const logoutUser = () => {
	localStorage.removeItem('user');
};

const editUser = async (userData) => {};

const authServices = {
	registerNewUser,
	loginUser,
	logoutUser,
};

export default authServices;
