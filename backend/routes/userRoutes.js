const express = require('express');
const router = express.Router();
const {
	findUsers,
	createUser,
	editUser,
	deleteUser,
} = require('../controllers/userControllers');

router.route('/').get(findUsers).post(createUser);
router.route('/:id').put(editUser).delete(deleteUser);

module.exports = router;
