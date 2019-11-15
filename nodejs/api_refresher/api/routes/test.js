const express = require('express');
const router = express.Router();

const testController = require('../controllers/test.js');

// GET /feed/posts
router.get('/tests', testController.getTests);

// POST /feed/post
router.post('/post', testController.callWatson);


router.post('/create', testController.createSession);


module.exports = router;