//Define empty controller
var optionController = {};
var Option = require('../models/option'); // import the Option schema

// get all the options (accessed at GET http://localhost:8080/api/options)
optionController.list = function(req, res) {
  Option.find(function(err, options) {
    if (err)
    res.send(err);

    res.json(options);
  });
};

//get the option with that id (accessed at GET http://localhost:8080/api/options/:option_id)
optionController.show = function(req, res){
  Option.findById(req.params.option_id, function(err, option){
    if (err)
    res.send(err);

    res.json(option);
  });
};

// create a option (accessed at POST http://localhost:8080/api/options)
optionController.create = function(req, res) {
  var option = new Option();      // create a new instance of the Option model
  option.name = req.body.name;  // set the option name (comes from the request)
  option.question_id = req.body.question_id; //set the question_id to identify relationship to parent question
  // save the option and check for errors
  option.save(function(err) {
    if (err)
    res.send(err);

    res.json({ message: 'Option created!' });
  });
};

// update the option with this id (accessed at PUT http://localhost:8080/api/options/:option_id)
optionController.edit = function(req, res) {
  // use our option model to find the option we want
  Option.findById(req.params.option_id, function(err, option) {
    if (err)
    res.send(err);
    option.name = req.body.name;  // update the option name (comes from the request)
    option.question_id = req.body.question_id; //update the question_id to identify relationship to parent question
    // save the option
    option.save(function(err) {
      if (err)
      res.send(err);

      res.json({ message: 'Option updated!' });
    });

  });
};

  // delete the option with this id (accessed at DELETE http://localhost:8080/api/optionss/:option_id)
  optionController.remove = function(req, res) {
    Option.remove({
      _id: req.params.option_id
    }, function(err, option) {
      if (err)
      res.send(err);

      res.json({ message: 'Option successfully deleted' });
    });
  };


  module.exports = optionController;
