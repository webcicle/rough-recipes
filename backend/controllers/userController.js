const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const passwordHasher = async (password) => {
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);
	return hashedPassword;
};

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

	// const salt = await bcrypt.genSalt(10);
	// const hashedPassword = await bcrypt.hash(password, salt);

	const hashedPassword = await passwordHasher(password);

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

	// res.status(200).json({ message: 'Created new user' });
});

const loginUser = asyncHandler(async (req, res) => {
	const { username, password } = req.body;

	const user = await User.findOne({ username });

	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
			message: `User: ${user.username} logged in`,
			id: user.id,
			token: generateToken(user.id),
		});
	} else {
		res.status(400);
		throw new Error('Invalid login credentials');
	}
});

const getMe = asyncHandler(async (req, res) => {
	const { id } = req.user;
	const me = await User.findById(id);
	console.log(me);
	if (me) {
		const { username, email } = me;

		res.status(200).json({
			message: `My profile page`,
			username,
			email,
		});
	} else {
		throw new Error('No such user exists, please check your request');
	}
});

const editUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	console.log(req.body.password, req.body.email);
	const hashedPassword = password && (await passwordHasher(password));

	let user;
	if (!email && !password) {
		throw new Error('Please enter an email address or a password');
		return;
	}

	if (email && !password) {
		user = await User.findByIdAndUpdate(req.user.id, {
			email,
		});
		const { _id: id } = user;
		let newUser = { id, token: generateToken(id) };

		res.status(200).json({
			message: `Edited user email: ${user.username}`,
			user: newUser,
		});
	}

	if (!email && password) {
		user = await User.findByIdAndUpdate(req.user.id, {
			password: hashedPassword,
		});

		const { _id: id } = user;
		let newUser = { id, token: generateToken(id) };

		res.status(200).json({
			message: `Edited user password: ${user.username}`,
			user: newUser,
		});
	}
});

// Generate token

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

module.exports = { createUser, loginUser, getMe, editUser };
