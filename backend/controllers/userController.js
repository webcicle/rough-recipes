const asyncHandler = require('express-async-handler');
// const Users = require('../models/userModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const createUser = asyncHandler(async (req, res) => {
	const { username, email, password } = req.body;

	if (!username || !email || !password) {
		res.status(400);
		throw new Error('Please fill out all fields');
	}

	const userExists = await User.findOne({ username });
	if (userExists) {
		res.status(400);
		throw new Error('User already exists');
	}

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const newUser = await User.create({
		username,
		email,
		password: hashedPassword,
	});

	if (newUser) {
		res.status(201).json({
			message: `User: ${newUser.username} created`,
			id: newUser._id,
			username: newUser.username,
			email: newUser.email,
			token: generateToken(newUser._id),
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}

	res.status(200).json({ message: 'Create new user' });
});

const loginUser = asyncHandler(async (req, res) => {
	const { username, password } = req.body;

	const user = await User.findOne({ username });

	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
			message: `User: ${user.username} logged in`,
			id: user.id,
			username: user.username,
			email: user.email,
			token: generateToken(user.id),
		});
	} else {
		res.status(400);
		throw new Error('Invalid login credentials');
	}
});

const getMe = asyncHandler(async (req, res) => {
	const { _id, username, email } = req.user;

	res.status(200).json({
		message: `My profile page`,
		id: _id,
		username,
		email,
	});
});

// Generate token

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

module.exports = { createUser, loginUser, getMe };
