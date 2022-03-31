const mongoose = require('mongoose');

const User = mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, 'Please enter a name'],
		},
		email: {
			type: String,
			required: [true, 'Please enter an email address'],
		},
		password: {
			type: String,
			required: [true, 'Please enter a password'],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', User);
