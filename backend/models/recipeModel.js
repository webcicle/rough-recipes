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
	calories: { type: String, required: true, trim: true },
	protein: { type: String, required: true, trim: true },
	carbs: { type: String, required: true, trim: true },
	fat: { type: String, required: true, trim: true },
	activeTime: { type: Number, required: true, trim: true },
	totalTime: { type: Number, required: true, trim: true },
	servings: { type: Number, required: true, trim: true },
});

const recipeSchema = mongoose.Schema(
	{
		fullTitle: {
			type: String,
			required: [true, 'Please add a title'],
			trim: true,
			unique: [true, 'Title already exists'],
		},
		shortTitle: {
			type: String,
			required: [true, 'Please add a short title'],
			trim: true,
			unique: [true, 'Short title already exists'],
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
		wordCount: {
			type: Number,
			required: true,
		},
		favourites: {
			type: Number,
		},
		comments: {
			type: [String],
		},
		createdAt: {
			type: Date,
		},
		updatedAt: {
			type: Date,
		},
		__v: {
			type: Number,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Recipes', recipeSchema);
