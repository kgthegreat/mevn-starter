var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TargetSchema = new Schema({
    title: String,
    description: String
});

var Target = mongoose.model("Target", TargetSchema);
module.exports = Target;
