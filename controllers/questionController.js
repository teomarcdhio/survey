//Define empty controller
var questionController = {};
var Question = require('../models/question'); // import the Question schema

// get all the questions (accessed at GET http://localhost:8080/api/questions)
questionController.list = function(req, res) {
  Question.find(function(err, questions) {
    if (err)
    res.send(err);

    res.json(questions);
  });
};

//get the question with that id (accessed at GET http://localhost:8080/api/questions/:question_id)
questionController.show = function(req, res){
  Question.findById(req.params.question_id, function(err, question){
    if (err)
    res.send(err);

    res.json(question);
  });
};

// create a question (accessed at POST http://localhost:8080/api/questions)
questionController.create = function(req, res) {
  var question = new Question();      // create a new instance of the Question model
  question.name = req.body.name;  // set the question name (comes from the request)
  question.question_type = req.body.question_type; //set the question description ( comes from the request )
  question.form_id = req.body.form_id; //set the form_id to identify relationship to parent form
  // save the question and check for errors
  question.save(function(err) {
    if (err)
    res.send(err);

    res.json({ message: 'Question created!' });
  });
};

// update the question with this id (accessed at PUT http://localhost:8080/api/questions/:question_id)
questionController.edit = function(req, res) {
  // use our question model to find the question we want
  Question.findById(req.params.question_id, function(err, question) {
    if (err)
    res.send(err);
    question.name = req.body.name;  // set the question name (comes from the request)
    question.question_type = req.body.question_type; //set the question description ( comes from the request )
    question.form_id = req.body.form_id; //set the form_id to identify relationship to parent form
    // save the question
    question.save(function(err) {
      if (err)
      res.send(err);

      res.json({ message: 'Question updated!' });
    });

  });
};

  // delete the question with this id (accessed at DELETE http://localhost:8080/api/questionss/:question_id)
  questionController.remove = function(req, res) {
    Question.remove({
      _id: req.params.question_id
    }, function(err, question) {
      if (err)
      res.send(err);

      res.json({ message: 'Question successfully deleted' });
    });
  };


  module.exports = questionController;
