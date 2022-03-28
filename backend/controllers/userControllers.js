const findUsers = (req, res) => {
	res.status(200).json({ message: 'Find all users' });
};

const createUser = (req, res) => {
	console.log(req.body);
	res.status(200).json({ message: 'Create new user' });
};

const editUser = (req, res) => {
	res.status(200).json({ message: `Edited user: ${req.params.id}` });
};

const deleteUser = (req, res) => {
	res.status(200).json({ message: `Deleted user: ${req.params.id}` });
};

module.exports = { findUsers, createUser, editUser, deleteUser };
