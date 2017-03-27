// BASE SETTINGS

// set the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');       // set mongoose
var Form       = require('./models/form'); // import the Form schema
var forms     = require('./routes/forms'); // import the routes

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set the server variables
var port = process.env.PORT || 8080;        // set our port

// connect mongoose to a database
mongoose.connect('mongodb://localhost:27017/survey');

// START THE APP
app.listen(port);
console.log('Magic happens on port ' + port);

// REGISTER THE ROUTES -------------------------------
app.use('/api', forms); // all of our routes will be prefixed with /api
