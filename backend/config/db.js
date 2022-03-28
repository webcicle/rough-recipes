const mongoose = require('mongoose');

const connectDb = async () => {
	try {
		const conn = await mongoose.connect(process.env.SERVER_URI);

		console.log(`Mongo DB connected on ${conn.connection.host}`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDb;
