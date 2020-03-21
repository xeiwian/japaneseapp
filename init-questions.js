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
            question: "泣く(naku)",
            correctAnswer: "Cry",
            possibleAnswer: ["Shout", "Cry", "Yawn"]
        },
        {
            type: "Emotion",
            content: "笑い(warai) => Laugh",
            question: "笑い(warai)",
            correctAnswer: "Laugh",
            possibleAnswer: ["Excited", "Surprise", "Laugh"]
        },
        {
            type: "Emotion",
            content: "興奮した(kōfun shita) => Excited",
            question: "興奮した(kōfun shita)",
            correctAnswer: "Excited",
            possibleAnswer: ["Smile", "Happy", "Excited"]
        },
        {
            type: "Emotion",
            content: "怖い(kowai) => Scared",
            question: "怖い(kowai)",
            correctAnswer: "Scared",
            possibleAnswer: ["Worried", "Nervous", "Scared"]
        },
        {
            type: "Emotion",
            content: "叫ぶ(sakebu) => Shout",
            question: "叫ぶ(sakebu)",
            correctAnswer: "Shout",
            possibleAnswer: ["Angry", "Shout", "Frown"]
        },
        {
            type: "Emotion",
            content: "恥ずかしい(hazukashī) => Embarassed",
            question: "恥ずかしい(hazukashī)",
            correctAnswer: "Embarassed",
            possibleAnswer: ["Frown", "Upset", "Embarassed"]
        },
        {
            type: "Emotion",
            content: "ほっとした(hotto shita) => Relieved",
            question: "ほっとした(hotto shita)",
            correctAnswer: "Relieved",
            possibleAnswer: ["Relieved", "Relax", "Calm"]
        },
        {
            type: "Emotion",
            content: "心配する(shinpai suru) => Worried",
            question: "心配する(shinpai suru)",
            correctAnswer: "Worried",
            possibleAnswer: ["Worried", "Anxious", "Confused"]
        },
        {
            type: "Emotion",
            content: "寂しい(sabishī) => Lonely",
            question: "寂しい(sabishī)",
            correctAnswer: "Lonely",
            possibleAnswer: ["Bored", "Lonely", "Sad"]
        },
        {
            type: "Family",
            content: "おじさん(ojisan) => Uncle",
            question: "おじさん(ojisan)",
            correctAnswer: "Uncle",
            possibleAnswer: ["Uncle", "Father", "Grandfather"]
        },
        {
            type: "Family",
            content: "兄弟(kyōdai) => Brothers",
            question: "兄弟(kyōdai)",
            correctAnswer: "Brother",
            possibleAnswer: ["Cousin", "Brothers", "Brother-in-law"]
        },
        {
            type: "Family",
            content: "いとこ(itoko) => Cousin",
            question: "いとこ(itoko)",
            correctAnswer: "Cousin",
            possibleAnswer: ["Nephew", "Cousin", "Niece"]
        },
        {
            type: "Family",
            content: "子供(kodomo) => Child",
            question: "子供(kodomo)",
            correctAnswer: "Child",
            possibleAnswer: ["Child", "Baby", "Children"]
        },
        {
            type: "Family",
            content: "両親(ryoushin) => Parents",
            question: "両親(ryoushin)",
            correctAnswer: "Parents",
            possibleAnswer: ["Couple", "Married Couple", "Parents"]
        },
        {
            type: "Family",
            content: "息子(musuko) => Son",
            question: "息子(musuko)",
            correctAnswer: "Son",
            possibleAnswer: ["Niece", "Child", "Son"]
        },
        {
            type: "Family",
            content: "娘(musume) => Daughter",
            question: "娘(musume)",
            correctAnswer: "Daughter",
            possibleAnswer: ["Niece", "Daughter", "Child"]
        },
        {
            type: "Family",
            content: "叔母(obasan) => Aunt",
            question: "叔母(obasan)",
            correctAnswer: "Aunt",
            possibleAnswer: ["Aunt", "Mother", "Grandmother"]
        },
        {
            type: "Family",
            content: "親戚(shinseki) => Relatives",
            question: "親戚(shinseki)",
            correctAnswer: "Relatives",
            possibleAnswer: ["Parents", "Family", "Relatives"]
        },
        {
            type: "Food",
            content: "朝ごはん(asa gohan) => Breakfast",
            question: "朝ごはん(asa gohan)",
            correctAnswer: "Breakfast",
            possibleAnswer: ["Breakfast", "Dinner", "Lunch"]
        },
        {
            type: "Food",
            content: "料理(ryōri) => Cuisine",
            question: "料理(ryōri)",
            correctAnswer: "Cuisine",
            possibleAnswer: ["Food", "Cuisine", "Meal"]
        },
        {
            type: "Food",
            content: "日本食(nipponshoku) => Japanese food",
            question: "日本食(nipponshoku)",
            correctAnswer: "Japanese food",
            possibleAnswer: ["Western food", "Chinese food", "Japanese food"]
        },
        {
            type: "Food",
            content: "コーヒー(kōhī) => Coffee",
            question: "コーヒー(kōhī)",
            correctAnswer: "Coffee",
            possibleAnswer: ["Milk", "Tea", "Coffee"]
        },
        {
            type: "Food",
            content: "牛肉(gyūniku) => Beef",
            question: "牛肉(gyūniku)",
            correctAnswer: "Beef",
            possibleAnswer: ["Beef", "Chicken", "Pork"]
        },
        {
            type: "Food",
            content: "緑茶(ryokucha) => Green tea",
            question: "緑茶(ryokucha)",
            correctAnswer: "Green tea",
            possibleAnswer: ["Black Tea", "Tea", "Green Tea"]
        },
        {
            type: "Food",
            content: "林檎(ringo) => Apple",
            question: "林檎(ringo)",
            correctAnswer: "Apple",
            possibleAnswer: ["Orange", "Grapes", "Apple"]
        },
        {
            type: "Food",
            content: "ミルク(miruku) => Milk",
            question: "ミルク(miruku)",
            correctAnswer: "Milk",
            possibleAnswer: ["Cheese", "Milk", "Yogurt"]
        },
        {
            type: "Food",
            content: "チョコレート(chokoreeto) => Chocolate",
            question: "チョコレート(chokoreeto)",
            correctAnswer: "Chocolate",
            possibleAnswer: ["Chocolate", "Cookies", "Cake"]
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