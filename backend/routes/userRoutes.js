const express = require('express');
const router = express.Router();
const {
	createUser,
	loginUser,
	getMe,
	editUser,
	getFavourites,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', createUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.put('/me', protect, editUser);
router.post('/me/favourites', protect, getFavourites);

module.exports = router;
