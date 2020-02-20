const mongoose = require("mongoose");

const mongoDB = 'mongodb://localhost:27017/appdb';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const models = require("./question/model");
const Question = models.Question;

Question.insertMany(
    [
        {
            type: "Emotion",
            content: "泣く(naku) => Cry",
            correctAnswer: "Cry",
            possibleAnswer: ["Shout", "Cry", "Yawn"]
        },
        {
            type: "Emotion",
            content: "笑い(warai) => Laugh",
            correctAnswer: "Laugh",
            possibleAnswer: ["Excited", "Surprise", "Laugh"]
        },
        {
            type: "Emotion",
            content: "興奮した(kōfun shita) => Excited",
            correctAnswer: "Excited",
            possibleAnswer: ["Smile", "Happy", "Excited"]
        },
        {
            type: "Emotion",
            content: "怖い(kowai) => Scared",
            correctAnswer: "Scared",
            possibleAnswer: ["Worried", "Nervous", "Scared"]
        },
        {
            type: "Emotion",
            content: "叫ぶ(sakebu) => Shout",
            correctAnswer: "Shout",
            possibleAnswer: ["Angry", "Shout", "Frown"]
        },
        {
            type: "Emotion",
            content: "恥ずかしい(hazukashī) => Embarassed",
            correctAnswer: "Embarassed",
            possibleAnswer: ["Frown", "Upset", "Embarassed"]
        },
        {
            type: "Family",
            content: "おじさん(ojisan) => Uncle",
            correctAnswer: "Uncle",
            possibleAnswer: ["Uncle", "Father", "Grandfather"]
        },
        {
            type: "Family",
            content: "兄弟(kyōdai) => Brothers",
            correctAnswer: "Brother",
            possibleAnswer: ["Cousin", "Brothers", "Brother-in-law"]
        },
        {
            type: "Family",
            content: "いとこ(itoko) => Cousin",
            correctAnswer: "Cousin",
            possibleAnswer: ["Nephew", "Cousin", "Niece"]
        },
        {
            type: "Family",
            content: "子供(kodomo) => Child",
            correctAnswer: "Child",
            possibleAnswer: ["Child", "Baby", "Children"]
        },
        {
            type: "Family",
            content: "両親(ryoushin) => Parents",
            correctAnswer: "Parents",
            possibleAnswer: ["Couple", "Married Couple", "Parents"]
        },
        {
            type: "Family",
            content: "恥ずかしい(hazukashī) => Son",
            correctAnswer: "Son",
            possibleAnswer: ["Niece", "Child", "Son"]
        },
        {
            type: "Food",
            content: "朝ごはん(asa gohan) => Breakfast",
            correctAnswer: "Breakfast",
            possibleAnswer: ["Breakfast", "Dinner", "Lunch"]
        },
        {
            type: "Food",
            content: "料理(ryōri) => Cuisine",
            correctAnswer: "Cuisine",
            possibleAnswer: ["Food", "Cuisine", "Meal"]
        },
        {
            type: "Food",
            content: "日本食(nipponshoku) => Japanese food",
            correctAnswer: "Japanese food",
            possibleAnswer: ["Western food", "Chinese food", "Japanese food"]
        },
        {
            type: "Food",
            content: "コーヒー(kōhī) => Coffee",
            correctAnswer: "Coffee",
            possibleAnswer: ["Milk", "Tea", "Coffee"]
        },
        {
            type: "Food",
            content: "牛肉(gyūniku) => Beef",
            correctAnswer: "Beef",
            possibleAnswer: ["Beef", "Chicken", "Pork"]
        },
        {
            type: "Food",
            content: "緑茶(ryokucha) => Green tea",
            correctAnswer: "Green tea",
            possibleAnswer: ["Black Tea", "Tea", "Green Tea"]
        }
    ],
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Questions inserted');
        }
        mongoose.disconnect()
        process.exit(0);
    }
);