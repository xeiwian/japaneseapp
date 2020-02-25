const models = require("./model");
const Question = models.Question;

async function QueryEmotionQuestionController(req, res, next) {
    let query = Question.findOne({ type: 'Emotion'});
    try {
        let data = await query.exec();
        // res.status(200).json(data[0].content);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

async function ListQuestionController(req, res, next) {
    let query = Question.find({}, "type content correctAnswer possibleAnswer");
    try {
        let data = await query.exec();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

module.exports = {
    ListQuestionController,
    QueryEmotionQuestionController
};
