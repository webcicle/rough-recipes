const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const Recipes = require('../models/recipeModel');

const findAllRecipes = asyncHandler(async (req, res) => {
	res.status(200).json(res.paginatedResults);
});

const addRecipe = asyncHandler(async (req, res) => {
	const newRecipe = await Recipes.create({
		title: req.body.title,
		subtitle: req.body.subtitle,
		author: req.body.author,
		image: req.body.image,
		slug: req.body.slug,
		category: req.body.category,
		tags: req.body.tags,
		appearsIn: req.body.appearsIn,
		synopsis: req.body.synopsis,
		instructions: req.body.instructions,
		ingredients: req.body.ingredients,
	});

	res.status(200).json({ message: 'Add new recipe', data: newRecipe });
});

const editRecipe = asyncHandler(async (req, res) => {
	const recipe = await Recipes.findOne({ slug: req.params.slug });

	if (!recipe) {
		res.status(400);
		throw new Error('Recipe not found');
	}

	const updatedRecipe = await Recipes.findOneAndUpdate(
		{ slug: req.params.slug },
		{ $push: { comments: req.body } },
		{
			new: true,
		}
	);

	res.status(200).json(updatedRecipe);
});

const likeRecipe = asyncHandler(async (req, res) => {
	const recipe = await Recipes.findOne({ slug: req.params.slug });

	if (!recipe) {
		res.status(400);
		throw new Error('Recipe not found');
	}

	const likedRecipe = await Recipes.findOneAndUpdate(
		{ slug: req.params.slug },
		{ favourites: recipe.favourites + 1 || 1 },
		{ new: true }
	);

	res.status(200).json(likedRecipe);
});

const unlikeRecipe = asyncHandler(async (req, res) => {
	const recipe = await Recipes.findOne({ slug: req.params.slug });

	if (!recipe) {
		res.status(400);
		throw new Error('Recipe not found');
	}

	const unlikedRecipe = await Recipes.findOneAndUpdate(
		{ slug: req.params.slug },
		{ favourites: recipe.favourites - 1 || 0 },
		{ new: true }
	);

	res.status(200).json(unlikedRecipe);
});

const deleteRecipe = asyncHandler(async (req, res) => {
	const recipe = await Recipes.findById(req.params.id);

	if (!recipe) {
		res.status(400);
		throw new Error('Recipe not found');
	}

	await recipe.remove();

	res.status(200).json({
		message: `Deleted recipe with id: ${req.params.id}`,
	});
});

const findRecipe = asyncHandler(async (req, res) => {
	const recipe = await Recipes.findOne({ slug: req.params.slug });

	if (!recipe) {
		res.status(404);
		throw new Error('No such recipe');
	}
	res.status(200).json(recipe);
});

const findLatestRecipes = asyncHandler(async (req, res) => {
	const latest = await Recipes.find().limit(5).sort('-createdAt');

	res.status(200).json({ message: 'Find latest recipes', data: latest });
});

module.exports = {
	findAllRecipes,
	addRecipe,
	editRecipe,
	deleteRecipe,
	findLatestRecipes,
	findRecipe,
	likeRecipe,
	unlikeRecipe,
};
