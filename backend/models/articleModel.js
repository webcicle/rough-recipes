const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
	name: { type: String, required: true, trim: true },
	id: { type: String, required: true, trim: true },
});

const blockSchema = mongoose.Schema({
	text: { type: [String], required: true, trim: true },
	images: { type: [String], required: true, trim: true },
});

const recommendationSchema = mongoose.Schema({
	title: { type: String, required: true, trim: true },
	content: { type: [String], required: true, trim: true },
});

const articleSchema = mongoose.Schema(
	{
		fullTitle: {
			type: String,
			required: [true, 'Please add a title'],
			trim: true,
			unique: [true, 'Title already exists'],
		},
		shortTitle: {
			type: String,
			required: [true, 'Please add a title'],
			trim: true,
			unique: [true, 'Title already exists'],
		},
		subtitle: {
			type: String,
			required: [true, 'Please add a subtitle'],
			trim: true,
		},
		author: { type: authorSchema, required: true, trim: true },
		slug: { type: String, required: true, trim: true },
		thumbnail: { type: String, required: true, trim: true },
		summary: { type: String, required: true, trim: true },
		contentBlocks: { type: [blockSchema], required: true, trim: true },
		recommendations: { type: recommendationSchema, required: true, trim: true },
		wordCount: { type: Number, required: true, trim: true },
		favourites: { type: [Number], required: true, trim: true },
		comments: { type: [String], required: true, trim: true },
		createdAt: { type: String, trim: true },
		updatedAt: { type: String, trim: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Article', articleSchema);
