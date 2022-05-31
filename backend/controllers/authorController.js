const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const Author = require('../models/authorModel');

const getAllAuthors = asyncHandler(async (req, res) => {
	const results = await Author.find();
	if (!results) {
		res.status(404);
		throw new Error('No authors found');
	}

	res.status(200).json(results);
});

const findAuthor = asyncHandler(async (req, res) => {
	const author = await Author.findById(req.params.id);
	if (!author) {
		res.status(400);
		throw new Error('No such user found');
	}

	res.status(200).json(author);
});

const createAuthor = asyncHandler(async (req, res) => {
	const {
		author,
		handle,
		authorImage,
		about,
		articles,
		recipes,
		comments,
		favourites,
	} = req.body;

	const authorExists = await Author.findOne({ handle });

	console.log(authorExists);

	if (authorExists) {
		res.status(400);
		throw new Error('Author already exists');
	}

	const newAuthor = await Author.create({
		author,
		handle,
		authorImage,
		about,
		articles,
		recipes,
		comments,
		favourites,
	});

	if (newAuthor) {
		res.status(201).json({
			author: newAuthor.author,
			handle: newAuthor.handle,
			authorImage: newAuthor.authorImage,
			about: newAuthor.about,
			articles: newAuthor.articles,
			recipes: newAuthor.recipes,
			comments: newAuthor.comments,
			favourites: newAuthor.favourites,
		});
		return;
	} else {
		res.status(400);
		throw new Error('Invalid author data');
	}
	// res.status(200).json('Create user');
});

module.exports = { getAllAuthors, findAuthor, createAuthor };
