const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/user-controller');

// GET all and POST at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// PUT at /api/users/:userId/:friendId
router
  .route('/:userId/:friendId')
  .put(addFriend)
  .delete(removeFriend);

module.exports = router;