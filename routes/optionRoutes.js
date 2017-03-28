// ROUTES
var express    = require('express');        // call express
var router = express.Router();              // get an instance of the express Router
var optionController = require('../controllers/optionController.js'); //import the controllers


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Hitting the middleware');
    next(); // make sure we go to the next routes and don't stop here
});


// routes that end in /options
// ----------------------------------------------------
//Display all the options
router.get('/options', optionController.list);
//Display a specific form
router.get('/options/:option_id', optionController.show);
//Create a new form
router.post('/options', optionController.create);
//Edit an exisitng form
router.put('/options/:option_id', optionController.edit);
//Delete an exisitng form
router.delete('/options/:option_id', optionController.remove);


module.exports = router;
