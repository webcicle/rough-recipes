const express = require('express');
const router = express.Router();
const {
	createUser,
	loginUser,
	getMe,
	editUser,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', createUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.put('/me', protect, editUser);

module.exports = router;
