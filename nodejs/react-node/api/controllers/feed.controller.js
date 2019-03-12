const { validationResult } = require('express-validator/check');

const Post = require('../models/post.model');

exports.getPosts = (req, res, next) =>{
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
    });
}

exports.createPost = (req, res, next) =>{
    // VALIDATION
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res
            .status(422)
            .json(
                {message: 'Validation failed', errors: errors.array()}
            );
    }

    const title = req.body.title;
    const content = req.body.content;

    // Mongoose post creation
    const post = new Post({
        title: title,
        content: content,
        imageUrl: 'images/duck.jpg',
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
        .catch(err=>{
            console.log(err);
        });
    // Create post in db (201 means success a content was created)
    
}