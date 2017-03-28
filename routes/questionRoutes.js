// ROUTES
var express    = require('express');        // call express
var router = express.Router();              // get an instance of the express Router
var questionController = require('../controllers/questionController.js'); //import the controllers


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Hitting the middleware');
    next(); // make sure we go to the next routes and don't stop here
});


// routes that end in /questions
// ----------------------------------------------------
//Display all the questions
router.get('/questions', questionController.list);
//Display a specific form
router.get('/questions/:question_id', questionController.show);
//Create a new form
router.post('/questions', questionController.create);
//Edit an exisitng form
router.put('/questions/:question_id', questionController.edit);
//Delete an exisitng form
router.delete('/questions/:question_id', questionController.remove);


module.exports = router;
