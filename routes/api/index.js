const router = require('express').Router();
const thoughtsRoutes = require('./thoughts-routes');
const userRoutes = require('./user-routes');

// api/thoughts |AND| api/users
router.use('/thoughts', thoughtsRoutes);
router.use('/users', userRoutes);

module.exports = router;