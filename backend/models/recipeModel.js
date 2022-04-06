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
			required: [true, 'Please add an image'],
			trim: true,
		},
		slug: {
			type: String,
			required: [true, 'Please add a slug'],
			trim: true,
		},
		category: {
			type: String,
			required: [true, 'Please add a slug'],
			trim: true,
		},
		tags: {
			type: [String],
			trim: true,
		},
		appearsIn: {
			type: [Number],
		},
		synopsis: {
			type: String,
			required: [true, 'Please add a synopsis'],
			trim: true,
		},
		instructions: {
			type: [String],
			required: [true, 'Please add instructions'],
			trim: true,
		},
		ingredients: {
			type: [String],
			required: [true, 'Please add ingredients'],
			trim: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Recipes', recipeSchema);
