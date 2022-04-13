const mongoose = require('mongoose');

const tipsSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	content: {
		type: [String],
		required: true,
		trim: true,
	},
});

const factsSchema = mongoose.Schema({
	calories: { type: Number, required: true, trim: true },
	protein: { type: Number, required: true, trim: true },
	carbs: { type: Number, required: true, trim: true },
	fat: { type: Number, required: true, trim: true },
	activeTime: { type: Number, required: true, trim: true },
	totalTime: { type: Number, required: true, trim: true },
	servings: { type: Number, required: true, trim: true },
});

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
		tips1: {
			type: tipsSchema,
			required: true,
		},
		tips2: {
			type: tipsSchema,
			required: true,
		},
		appearsIn: {
			type: [Number],
		},
		synopsis: {
			type: [String],
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
		facts: {
			type: factsSchema,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Recipes', recipeSchema);
