const models = require("./model");
const Question = models.Question;

async function QueryEmotionContentController(req, res, next) {
    let query = Question.find({ type: 'Emotion'});
    try {
        let data = await query.exec();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    } 
}

async function QueryFamilyContentController(req, res, next) {
    let query = Question.findOne({ type: 'Family'});
    try {
        let data = await query.exec();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    } 
}

async function QueryFoodContentController(req, res, next) {
    let query = Question.findOne({ type: 'Food'});
    try {
        let data = await query.exec();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    } 
}

// async function ListQuestionController(req, res, next) {
//     let query = Question.find({}, "type content correctAnswer possibleAnswer");
//     try {
//         let data = await query.exec();
//         res.status(200).json(data);
//     } catch (err) {
//         res.status(400).json({ err: err.message });
//         return;
//     }
// }

module.exports = {
    // ListContentController,
    QueryEmotionContentController,
    QueryFamilyContentController,
    QueryFoodContentController
};
