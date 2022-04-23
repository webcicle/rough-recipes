const express = require('express');
const router = express.Router();
const {
	findAllRecipes,
	addRecipe,
	editRecipe,
	deleteRecipe,
	findLatestRecipes,
	findRecipe,
} = require('../controllers/recipesController');
const Recipes = require('../models/recipeModel');
const { paginatedResults } = require('../middleware/paginatedResults');

router
	.route('/')
	.get(paginatedResults(Recipes), findAllRecipes)
	.post(addRecipe);
router.route('/latest').get(findLatestRecipes);
router.route('/:slug').get(findRecipe).put(editRecipe).delete(deleteRecipe);

module.exports = router;
