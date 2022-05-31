const asyncHandler = require('express-async-handler');
const nodemailer = require('nodemailer');
const path = require('path');

const sendEmail = asyncHandler(async (req, res) => {
	if (req.body) {
		const { from, to, username, text } = req.body;

		try {
			let transporter = nodemailer.createTransport({
				host: 'smtp01.crystone.se',
				port: 587,
				auth: {
					user: process.env.EMAIL,
					pass: process.env.PASS,
				},
			});

			let info = await transporter.sendMail({
				from: `Rough Recipes User<${from}>`,
				to: [process.env.recipient1],
				subject: `Message from ${username} - Rough Recipes contact form`,
				text,
			});

			console.log(`Message sent: ${info.messageId}`);
			res.json(`Message sent: ${info.messageId}`);
		} catch (error) {
			throw new Error('Something went wrong in sendEmail function');
		}
	}
});

module.exports = {
	sendEmail,
};
