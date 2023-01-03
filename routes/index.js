const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const apiRouter = require('./notes_route.js');

router.use('/', apiRouter);

module.exports = router;
