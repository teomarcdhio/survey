var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var QuestionSchema   = new Schema({
    name: String,
    question_type: String,
    form_id: String,
    updated_at: { type: Date, default: Date.now},

});

module.exports = mongoose.model('Question', QuestionSchema);
