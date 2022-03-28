const asyncHandler = require('express-async-handler');
// const Users = require('../models/userModel')

const findUsers = asyncHandler(async (req, res) => {
	// const allUsers = Users.find()

	res.status(200).json({ message: 'Find all users' });
});

const createUser = asyncHandler(async (req, res) => {
	// const newUser = Users.create({
	//    username: req.body.username,
	//    email: req.body.email,
	//    password: req.body.password
	// })
	// RETURN THE newUser in the response

	res.status(200).json({ message: 'Create new user' });
});

const editUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Edited user: ${req.params.id}` });
});

const deleteUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Deleted user: ${req.params.id}` });
});

module.exports = { findUsers, createUser, editUser, deleteUser };
