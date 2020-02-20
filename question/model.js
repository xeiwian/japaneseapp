const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    type: String,
    content: String,
    correctAnswer: String,
    possibleAnswer: Array
});

const question = mongoose.model("Question", QuestionSchema);

module.exports = {Question: question};