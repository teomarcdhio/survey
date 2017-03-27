var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var FormSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Form', FormSchema);
