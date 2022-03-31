const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'Please add a title'],
			trim: true,
			unique: [true, 'Title already exists'],
		},
		subtitle: {
			type: String,
			required: [true, 'Please add a subtitle'],
			trim: true,
			unique: [true, 'Subtitle already exists'],
		},
		author: {
			type: String,
			required: [true, 'Please add an author'],
			trim: true,
		},
		image: {
			type: String,
			trim: true,
		},
		slug: {
			type: String,
			required: [true, 'Please add a subtitle'],
			trim: true,
			unique: [true, 'Subtitle already exists'],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Recipes', recipeSchema);
