// BASE SETTINGS

// set the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');       // set mongoose
var Form       = require('./models/form'); // import the Form schema
var forms      = require('./routes/formRoutes'); // import the routes
var Question   = require('./models/question'); // import the Question schema
var questions  = require('./routes/questionRoutes'); // import the routes
var Option   = require('./models/option'); // import the Question schema
var options  = require('./routes/optionRoutes'); // import the routes
var View   = require('./models/view'); // import the View schema
var views  = require('./routes/viewRoutes'); // import the routes


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
app.use('/api', forms); // enable api/forms route
app.use('/api', questions); // enable api/questions route
app.use('/api', options); // enable api/options route
app.use('/api', views); // enable api/views route
