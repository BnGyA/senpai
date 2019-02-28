const fs = require('fs');
const path = require('path');

// Setup the datafile path
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'recipes.json'
);

// GetRecupesFromFile(cb)

const getRecipesFromFile = cb =>{
    fs.readFile(p, (err, fileContent) =>{
        if(err){
            // if err, callback with an empty array
            cb([]);
        } else {
            // else parse the file and give the res
            cb(JSON.parse(fileContent));
        }
    })
}

// Recipe model declaration

module.exports = class Recipe{
    constructor(title, imageUrl, description, price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    static fetchAll(cb){
        getRecipesFromFile(cb);
    }
}