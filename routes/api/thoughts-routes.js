const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  removeReaction,
  addReaction
} = require('../../controllers/thoughts-controller');

// GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);

// GET, PUT, and DELETE thought by Id at /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

// POST reaction at /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
    .post(addReaction);

// DELETE reaction at /api/thoughts/:thoughtId/:reactionId
router
  .route('/:thoughtId/:reactionId')
    .post(removeReaction);

module.exports = router;