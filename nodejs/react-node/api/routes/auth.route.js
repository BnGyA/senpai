const express = require('express');
const {body} = require('express-validator/check')

const User = require('../models/user.model');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.put('/signup', [
    body('email').isEmail().withMessage('Please enter a valid email.').custom((value, { req }) =>{
        // Search the email 
        return User.findOne({email: value}).then(userDoc =>{
            // if the email already exist, reject
            if(userDoc){
                return Promise.reject('Email adress already exists');
            }
        })
    })
    .normalizeEmail(),
    body('password').trim().isLength({min: 5}),
    body('name').trim().not().isEmpty()
    
],
authController.signup);


router.post('/login', authController.login);

module.exports = router;