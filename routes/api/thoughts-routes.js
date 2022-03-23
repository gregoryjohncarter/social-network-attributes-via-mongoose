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

// GET all at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)

// POST at /api/thoughts/:userId
router
  .route('/:userId')
  .post(addThought);

// GET, PUT, and DELETE thought by Id at /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

// PUT reaction at /api/thoughts/:thoughtId/reaction
router
  .route('/:thoughtId/reaction')
    .put(addReaction);

// DELETE reaction at /api/thoughts/:thoughtId/:reactionId
router
  .route('/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;