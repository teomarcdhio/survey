// set the packages we need
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// define the object schema
var FormSchema   = new Schema({
    name: String
});

// export the model
module.exports = mongoose.model('Form', FormSchema);
