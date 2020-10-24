const City = require('../models/city.model.js');

// Create and Save a new City
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "City content can not be empty"
        });
    }

    // Create a City (POST)
    const city = new City({
        title: req.body.title || "Untitled City", 
        content: req.body.content
    });

    // Save City in the database
    city.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the City."
        });
    });
};

// Retrieve and return all cities from the database. (GET)
exports.findAll = (req, res) => {
    City.find()
    .then(cities => {
        res.send(cities);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving cities."
        });
    });
};

// Find a single city with a cityId (GET)
exports.findOne = (req, res) => {
    City.findById(req.params.cityId)
    .then(city => {
        if(!city) {
            return res.status(404).send({
                message: "City not found with id " + req.params.cityId
            });            
        }
        res.send(city);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "City not found with id " + req.params.cityId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving city with id " + req.params.cityId
        });
    });
};

// Update a city identified by the cityId in the request (PUT)
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "City content can not be empty"
        });
    }

    // Find city and update it with the request body (DELETE)
    City.findByIdAndUpdate(req.params.cityId, {
        title: req.body.title || "Untitled City",
        content: req.body.content
    }, {new: true})
    .then(city => {
        if(!city) {
            return res.status(404).send({
                message: "City not found with id " + req.params.cityId
            });
        }
        res.send(city);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "City not found with id " + req.params.cityId
            });                
        }
        return res.status(500).send({
            message: "Error updating city with id " + req.params.cityId
        });
    });
};

// Delete a city with the specified cityId in the request
exports.delete = (req, res) => {
    City.findByIdAndRemove(req.params.cityId)
    .then(city => {
        if(!city) {
            return res.status(404).send({
                message: "City not found with id " + req.params.cityId
            });
        }
        res.send({message: "City deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "City not found with id " + req.params.cityId
            });                
        }
        return res.status(500).send({
            message: "Could not delete city with id " + req.params.cityId
        });
    });
};