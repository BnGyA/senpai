const Recipe = require('../models/recipe');

exports.getIndex = (req, res, next) =>{
    Recipe.fetchAll(recipes =>{
        res.render('front/index', {
            recipe: recipes,
            pageTitle: "Front recipes",
            path: '/'
        })
    })
}