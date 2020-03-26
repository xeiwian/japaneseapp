const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    age: Number,
    emotionscore: Number,
    familyscore: Number,
    foodscore: Number,
    earlyscore: Number,
    words: Array,
    chosenwords: Array,
    finalscore: Number
});

const user = mongoose.model("user", UserSchema);

module.exports = user;