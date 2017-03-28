// ROUTES
var express    = require('express');        // call express
var router = express.Router();              // get an instance of the express Router
var formController = require('../controllers/formController.js'); //import the controllers


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


// routes that end in /forms
// ----------------------------------------------------
//Display all the forms
router.get('/forms', formController.list);
//Display a specific form
router.get('/forms/:form_id', formController.show);
//Create a new form
router.post('/forms', formController.create);
//Edit an exisitng form
router.put('/forms/:form_id', formController.edit);
//Delete an exisitng form
router.delete('/forms/:form_id', formController.remove);


module.exports = router;
