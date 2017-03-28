//Define empty controller
var formController = {};
var Form = require('../models/form'); // import the Form schema

// get all the forms (accessed at GET http://localhost:8080/api/forms)
formController.list = function(req, res) {
  Form.find(function(err, forms) {
    if (err)
    res.send(err);

    res.json(forms);
  });
};

//get the form with that id (accessed at GET http://localhost:8080/api/forms/:form_id)
formController.show = function(req, res){
  Form.findById(req.params.form_id, function(err, form){
    if (err)
    res.send(err);

    res.json(form);
  });
};

// create a form (accessed at POST http://localhost:8080/api/forms)
formController.create = function(req, res) {
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

// update the form with this id (accessed at PUT http://localhost:8080/api/forms/:form_id)
formController.edit = function(req, res) {
  // use our form model to find the form we want
  Form.findById(req.params.form_id, function(err, form) {
    if (err)
    res.send(err);
    form.name = req.body.name;  // update the forms info
    form.description = req.body.description; //update the form description ( comes from the request )
    // save the form
    form.save(function(err) {
      if (err)
      res.send(err);

      res.json({ message: 'Form updated!' });
    });

  });
};

  // delete the form with this id (accessed at DELETE http://localhost:8080/api/formss/:form_id)
  formController.remove = function(req, res) {
    Form.remove({
      _id: req.params.form_id
    }, function(err, form) {
      if (err)
      res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  };


  module.exports = formController;
