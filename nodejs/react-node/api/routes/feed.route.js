const express = require('express');
// validation
const {body} = require('express-validator/check')

const router = express.Router();

const feedController = require('../controllers/feed.controller.js');


// GET /feed/posts
router.get('/posts', feedController.getPosts);

// POST /feed/post
router.post('/post', [
    // validation
    body('title').trim().isLength({min: 5}),
    body('content').trim().isLength({min: 5}), 
], feedController.createPost);
module.exports = router;