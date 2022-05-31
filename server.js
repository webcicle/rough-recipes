const express = require('express');
const env = require('dotenv').config();
const connectDb = require('./config/db');
const { errorHandler } = require('./middleware/errorHandler');
const path = require('path');

connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/recipes', require('./routes/recipesRoutes'));
app.use('/api/email', require('./routes/emailRoutes'));
app.use('/api/articles', require('./routes/articlesRoutes'));
app.use('/api/authors', require('./routes/authorRoutes'));
app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
