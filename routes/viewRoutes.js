// ROUTES
var express    = require('express');        // call express
var router = express.Router();              // get an instance of the express Router
var viewController = require('../controllers/viewController.js'); //import the controllers


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Hitting the middleware');
    next(); // make sure we go to the next routes and don't stop here
});

// main route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'All seems to be working and the API is responding' });
});


// routes that end in /views
// ----------------------------------------------------
//Display all the views
router.get('/views', viewController.list);
//Display a specific view
router.get('/views/:view_id', viewController.show);



module.exports = router;
