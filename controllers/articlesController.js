const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const Article = require('../models/articleModel');

const getAllArticles = asyncHandler(async (req, res) => {
	const results = await Article.find();
	if (!results) {
		res.status(401);
		throw new Error('No articles found, database disconnected or unreachable');
	}
	res.status(200).json(results);
});

const getLatestArticles = asyncHandler(async (req, res) => {
	const results = await Article.find().limit(15);
	if (!results) {
		res.status(401);
		throw new Error(
			'No latest articles found, database disconnected or unreachable'
		);
	}
	res.status(200).json(results);
});

module.exports = {
	getAllArticles,
	getLatestArticles,
};
