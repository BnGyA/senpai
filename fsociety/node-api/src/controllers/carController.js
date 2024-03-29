const boom = require('boom');

const Car = require('../models/Car');


// Get all cars
exports.getCars = async(req, res) =>{
    try{
        const cars = await Car.find();
        return cars
    } catch (err){
        throw boom.boomify(err);
    }
}

// Get a car by ID
exports.getSingleCar = async(req, res) =>{
    try{
        // get the params id
        const id = req.params.id;
        const car = await Car.findById(id);
        return car;
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Add a new car
exports.addCar = async(req, res) =>{
    try{
        // Spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        const car = new Car(req.body);
        return car.save();
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Update an existing car
exports.updateCar = async(req, res) =>{
    try{
        const id = req.params.id;
        const car = req.body;
        // https://codeburst.io/use-es2015-object-rest-operator-to-omit-properties-38a3ecffe90
        const {...updateData} = car;
        const update = await Car.findByIdAndUpdate(id, updateData, {new: true});
        return update;
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Delete a car
exports.deleteCar = async(req, res) =>{
    try{
        const id = req.params.id;
        const car = await Car.findByIdAndRemove(id);
        return car;
    } catch (err) {
        throw boom.boomify(err);
    }
}
