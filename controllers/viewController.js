//Define empty controller
var viewController = {};
var Form = require('../models/form'); // import the Form schema
var Question = require('../models/question'); // import the Question schema
var Option = require('../models/option'); // import the Option schema

// get all the forms (accessed at GET http://localhost:8080/api/forms)
viewController.list = function(req, res) {
  Form.find(function(err, forms) {
    if (err)
    res.send(err);

    res.json(forms);
  });
};

//get the form with that id (accessed at GET http://localhost:8080/api/forms/:form_id)
viewController.show = function(req, res){
  Form.findById(req.params.form_id, function(err, form){
    if (err)
    res.send(err);

    res.json(form);
  });
};

// create a form (accessed at POST http://localhost:8080/api/forms)
viewController.create = function(req, res) {
  var form = new Form();      // create a new instance of the Form model
  form.name = req.body.name;  // set the form name (comes from the request)
  form.description = req.body.description; //set the form description ( comes from the request )
  // save the form and check for errors
  form.save(function(err) {
    if (err)
    res.send(err);

    res.json({ message: 'Form created!' });
  });
};



  module.exports = viewController;
