const express = require('express');
const env = require('dotenv').config();
const connectDb = require('./config/db');
const { errorHandler } = require('./middleware/errorHandler');

connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/recipes', require('./routes/recipesRoutes'));
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
