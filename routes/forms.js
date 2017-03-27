// ROUTES
var express    = require('express');        // call express
var router = express.Router();              // get an instance of the express Router
var Form       = require('../models/form'); // import the Form schema

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
router.route('/forms')

    // create a form (accessed at POST http://localhost:8080/api/forms)
    .post(function(req, res) {

        var form = new Form();      // create a new instance of the Form model
        form.name = req.body.name;  // set the form name (comes from the request)

        // save the form and check for errors
        form.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Form created!' });
        });

    })

    // get all the forms (accessed at GET http://localhost:8080/api/forms)
    .get(function(req, res) {
        Form.find(function(err, forms) {
            if (err)
                res.send(err);

            res.json(forms);
        });
    });

//routes that end in /forms/:form_id

router.route('/forms/:form_id')

  //get the form with that id (accessed at GET http://localhost:8080/api/forms/:form_id)

  .get(function(req, res){
    Form.findById(req.params.form_id, function(err, form){
      if (err)
        res.send(err);

      res.json(form);
    });
  })

  // update the form with this id (accessed at PUT http://localhost:8080/api/forms/:form_id)
    .put(function(req, res) {

        // use our form model to find the form we want
        Form.findById(req.params.form_id, function(err, form) {
            if (err)
                res.send(err);

            form.name = req.body.name;  // update the forms info

            // save the form
            form.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Form updated!' });
            });

        });
    })

    // delete the form with this id (accessed at DELETE http://localhost:8080/api/formss/:form_id)
    .delete(function(req, res) {
        Form.remove({
            _id: req.params.form_id
        }, function(err, form) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

    module.exports = router;
