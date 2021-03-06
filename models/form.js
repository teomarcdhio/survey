var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var FormSchema   = new Schema({
    name: String,
    description: String,
    updated_at: { type: Date, default: Date.now},
});

module.exports = mongoose.model('Form', FormSchema);
