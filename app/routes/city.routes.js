module.exports = (app) => {
    const cities = require('../controllers/city.controller.js');

    // Create a new Note
   app.post('/cities', cities.create);

    // Retrieve all cities based on start date range between from & to
    app.get('/cities/:fromDate/:toDate', cities.findAll);

    // Retrieve a single Note with cityId
    app.get('/cities/:cityId', cities.findOne);

    // Update a Note with cityId
    app.put('/cities/:cityId', cities.update);

    // Delete a Note with cityId
    app.delete('/cities/:cityId', cities.delete);
}