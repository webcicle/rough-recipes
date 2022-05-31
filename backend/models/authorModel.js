const mongoose = require('mongoose');

const authorSchema = mongoose.Schema(
	{
		author: { type: String, required: true, trim: true },
		handle: { type: String, required: true, trim: true },
		authorImage: { type: String, required: true, trim: true },
		about: { type: [String], required: true, trim: true },
		articles: { type: [String], required: true, trim: true },
		recipes: { type: [String], required: true, trim: true },
		comments: { type: [String], required: true, trim: true },
		favourites: { type: [String], required: true, trim: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Author', authorSchema);
