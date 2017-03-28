var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var OptionSchema   = new Schema({
    name: String,
    question_id: String,
    updated_at: { type: Date, default: Date.now},

});

module.exports = mongoose.model('Option', OptionSchema);
