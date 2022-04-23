const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const paginatedResults = (model) => {
	return async (req, res, next) => {
		const page = parseInt(req.query.page);
		const limit = parseInt(req.query.limit);

		const startIndex = (page - 1) * limit;
		const endIndex = page * limit;

		const result = {};

		if (endIndex < (await model.countDocuments().exec())) {
			result.next = {
				page: page + 1,
				limit,
			};
		}

		if (startIndex > 0) {
			result.previous = {
				page: page - 1,
				limit,
			};
		}

		try {
			result.results = await model.find().limit(limit).skip(startIndex).exec();
			res.paginatedResults = result;
			next();
		} catch (error) {
			throw new Error(error);
		}
	};
};

module.exports = { paginatedResults };
