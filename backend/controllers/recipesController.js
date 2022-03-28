const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const Recipes = require('../models/recipeModel');

const findAllRecipes = asyncHandler(async (req, res) => {
	const allRecipes = await Recipes.find();

	res.status(200).json({ message: 'Find all recipes', data: allRecipes });
});

const addRecipe = asyncHandler(async (req, res) => {
	const newRecipe = await Recipes.create({
		title: req.body.title,
		subtitle: req.body.subtitle,
		author: req.body.author,
	});

	res.status(200).json({ message: 'Add new recipe', data: newRecipe });
});

const editRecipe = asyncHandler(async (req, res) => {
	const recipe = await Recipes.findById(req.params.id);

	if (!recipe) {
		res.status(400);
		throw new Error('Recipe not found');
	}

	const updatedRecipe = await Recipes.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new: true,
		}
	);

	res.status(200).json({
		message: `Edited recipe with id: ${req.params.id}`,
		data: updatedRecipe,
	});
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

module.exports = { findAllRecipes, addRecipe, editRecipe, deleteRecipe };
