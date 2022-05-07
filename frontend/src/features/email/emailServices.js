import axios from 'axios';

const API_URL = '/api/email/sendEmail';

const sendMessage = async (messageObj) => {
	const response = await axios.post(API_URL, messageObj);
	return response.data;
};

const emailServices = {
	sendMessage,
};

export default emailServices;
