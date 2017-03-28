var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ViewSchema   = new Schema({
    form_id: String,
    question_id: String,
    option_id: String,
    answer: String,
    updated_at: { type: Date, default: Date.now},

});

module.exports = mongoose.model('View', ViewSchema);
