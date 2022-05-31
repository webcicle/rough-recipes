const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const Recipes = require('../models/recipeModel');

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

	console.log(userExists);

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
		favourites: [],
		comments: [],
	});

	if (newUser) {
		res.status(201).json({
			id: newUser._id,
			username: newUser.username,
			email: newUser.email,
			token: generateToken(newUser._id),
			favourites: [],
			comments: [],
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
});

const loginUser = asyncHandler(async (req, res) => {
	const { username, password } = req.body;

	const user = await User.findOne({ username });

	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
			id: user.id,
			token: generateToken(user.id),
			username: user.username,
			email: user.email,
			favourites: user.favourites,
			comments: user.comments,
		});
	} else {
		res.status(400);
		throw new Error('Invalid login credentials');
	}
});

const getMe = asyncHandler(async (req, res) => {
	const { id } = req.user;
	const me = await User.findById(id);
	if (me) {
		const { username, email, favourites, comments, _id } = me;

		res.status(200).json({
			username,
			email,
			favourites,
			comments,
			token: generateToken(_id),
			id: _id,
		});
	} else {
		throw new Error('No such user exists, please check your request');
	}
});

const editUser = asyncHandler(async (req, res) => {
	const { email, password, favourites } = req.body;
	const hashedPassword = password && (await passwordHasher(password));

	let user;
	if (!email && !password && !favourites) {
		throw new Error('Please enter some data');
		return;
	}

	if (email && !password) {
		user = await User.findByIdAndUpdate(req.user.id, {
			email,
		});
		const { _id: id, favourites, comments } = user;
		let newUser = { ...user, token: generateToken(id) };

		res.status(200).json({
			message: `Edited user email: ${user.username}`,
			user: newUser,
		});
		return;
	}

	if (!email && password) {
		user = await User.findByIdAndUpdate(req.user.id, {
			password: hashedPassword,
		});

		const { _id: id, favourites, comments } = user;
		let newUser = { ...user, token: generateToken(id) };

		res.status(200).json({
			message: `Edited user password: ${user.username}`,
			user: newUser,
		});
		return;
	}

	if (favourites && !email && !password) {
		user = await User.findByIdAndUpdate(req.user.id, { favourites });

		let newUser = {
			id: user.id,
			token: generateToken(user.id),
			email: user.email,
			username: user.username,
			favourites,
			comments: user.comments,
		};

		res.status(200).json(newUser);
		return;
	}
});

const getFavourites = asyncHandler(async (req, res) => {
	const favourites = req.body;
	const favRecipes = [];
	if (favourites) {
		for (let i = 0; i < favourites.length; i++) {
			let recipe = await Recipes.findById(favourites[i]);
			favRecipes.push(recipe);
		}
		res.status(200).json(favRecipes);
	}
	return;
});

// Generate token

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

module.exports = { createUser, loginUser, getMe, editUser, getFavourites };
