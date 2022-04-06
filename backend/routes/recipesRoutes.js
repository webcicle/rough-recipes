const express = require('express');
const router = express.Router();
const {
	findAllRecipes,
	addRecipe,
	editRecipe,
	deleteRecipe,
	findLatestRecipes,
} = require('../controllers/recipesController');

router.route('/').get(findAllRecipes).post(addRecipe);
router.route('/latest').get(findLatestRecipes);
router.route('/:id').put(editRecipe).delete(deleteRecipe);

module.exports = router;
