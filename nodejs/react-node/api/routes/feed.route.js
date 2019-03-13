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

// Get

router.get('/post/:postId', feedController.getPost);

// PUT
router.put('/post/:postId', feedController.updatePost, [
    // validation
    body('title').trim().isLength({min: 5}),
    body('content').trim().isLength({min: 5}), 
]);

// DELETE
router.delete('/post/:postId', feedController.deletePost)

module.exports = router;