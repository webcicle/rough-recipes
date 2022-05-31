const express = require('express');
const router = express.Router();
const {
	getAllAuthors,
	createAuthor,
	findAuthor,
} = require('../controllers/authorController');

router.route('/').get(getAllAuthors).post(createAuthor);
router.get('/:id', findAuthor);

module.exports = router;
