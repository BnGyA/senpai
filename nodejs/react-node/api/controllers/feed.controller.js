const { validationResult } = require('express-validator/check');
const fs = require('fs');
const path = require('path');

const Post = require('../models/post.model');

exports.getPosts = (req, res, next) => {

    // PAGINATION
    const currentPage = req.query.page || 1;
    const perPage = 2;
    let totalItems;

    Post.find()
        // this method will cound the documents without retrieving those
        .countDocuments()
        .then(count => {
            totalItems = count;
            // Find the POSTS only when we got the total items for the pagination
            return Post.find()
            // will skip some items
            .skip((currentPage -1) * perPage)
            .limit(perPage);
        })
        .then(posts => {
            res.status(200).json({ message: 'Fetched all posts', posts: posts, totalItems: totalItems });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            // need a next because we are into a promise
            next(err);
        })

    /* DUMMY DATA
    res.status(200).json({
        posts: [{
            _id: '1',
            title: 'First post',
            content: 'This is the first post !',
            imageUrl: 'images/duck.jpg',
            creator: {
                name: 'Benjamin'
            },
            createdAt: new Date()
        }]
    }); */
}

exports.createPost = (req, res, next) => {
    // VALIDATION
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        throw error;
    }

    // Check if image
    if (!req.file) {
        const error = new Error('No image provided');
        error.statusCode = 422;
        throw error;
    }
    const imageUrl = req.file.path;

    const title = req.body.title;
    const content = req.body.content;

    // Mongoose post creation
    const post = new Post({
        title: title,
        content: content,
        imageUrl: imageUrl,
        creator: {
            name: 'Benjamin'
        }
    });
    post
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Post created successfully!',
                post: result
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            // need a next because we are into a promise
            next(err);
        });
    // Create post in db (201 means success a content was created)

}


exports.getPost = (req, res, next) => {
    const postId = req.params.postId;
    Post.findById(postId)
        .then(post => {
            if (!post) {
                const error = new Error('Could not find post.');
                error.statusCode = 404;
                // when we throw the error into the then, the error is passed to the catch function
                throw error;
            }
            res.status(200).json({
                message: 'Post fetched',
                post: post
            })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            // need a next because we are into a promise
            next(err);
        })
}

exports.updatePost = (req, res, next) => {
    const postId = req.params.postId;
    const title = req.body.title;
    const content = req.body.content;
    // if no new image uploaded
    let imageUrl = req.body.image;
    // if new file upload
    if (req.file) {
        imageUrl = req.file.path;
    }
    if (!imageUrl) {
        const error = new Error('No file picked');
        error.statusCode = 422;
        throw error;
    }

    Post.findById(postId)
        .then(post => {
            if (!post) {
                const error = new Error('Could not find post.');
                error.statusCode = 404;
                // when we throw the error into the then, the error is passed to the catch function
                throw error;
            }
            // if the old image doesnt have the same url as the new, delete it
            if (imageUrl !== post.imageUrl) {
                clearImage(post.imageUrl);
            }
            post.title = title;
            post.imageUrl = imageUrl;
            post.content = content;
            return post.save();
        })
        .then(result => {
            console.log(result);
            res.status(200).json({ message: 'Post updated', post: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            // need a next because we are into a promise
            next(err);
        })
}

exports.deletePost = (req, res, next) => {
    const postId = req.params.postId;
    Post.findById(postId)
        .then(post => {
            if (!post) {
                const error = new Error('Could not find post.');
                error.statusCode = 404;
                // when we throw the error into the then, the error is passed to the catch function
                throw error;
            }
            // Check logged in user
            clearImage(post.imageUrl);
            return Post.findByIdAndDelete(postId)
        })
        .then(result => {
            console.log(result);
            res.status(200).json({ message: 'Deleted post.' }); s
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            // need a next because we are into a promise
            next(err);
        })
}


// Delete image helper
const clearImage = filePath => {
    filePath = path.join(__dirname, '..', filePath);
    fs.unlink(filePath, err => console.log(err));
};