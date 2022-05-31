const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			token = req.headers.authorization.split(' ')[1];

			const verify = jwt.verify(token, process.env.JWT_SECRET);

			req.user = await User.findById(verify.id).select('-password');

			next();
		} catch (error) {
			console.log(error);
			res.status(401);
			throw new Error('Unathorized user');
		}
	}
	if (!token) {
		res.status(401);
		throw new Error('Unathorized user - no token');
	}
});

module.exports = { protect };
