const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.create = async(req, res, next) =>{
    try{
        const user = new userModel(req.body);
        res.json({status: "success", message: "User added successfully!!!", data: null});
        return user.save();
    } catch(err) {

    }

}