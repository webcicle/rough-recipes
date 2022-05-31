const express = require('express');
const router = express.Router();
const {
	getAllArticles,
	getLatestArticles,
} = require('../controllers/articlesController');

router.get('/', getAllArticles);
router.get('/latest', getLatestArticles);

module.exports = router;
