const models = require("./model");
const Question = models.Question;

async function QueryEmotionThreeController(req, res, next) {
    let query = Question.find( { type: 'Emotion' }).limit( 3 );
    try {
        let data = await query.exec();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    } 
}

async function QueryEmotionSixController(req, res, next) {
    let query = Question.find( { type: 'Emotion' }).limit( 6 );
    try {
        let data = await query.exec();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    } 
}

async function QueryEmotionNineController(req, res, next) {
    let query = Question.find( { type: 'Emotion' }).limit( 9 );
    try {
        let data = await query.exec();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    } 
}

async function QueryFamilyThreeController(req, res, next) {
    let query = Question.findOne({ type: 'Family'}).limit( 3 );
    try {
        let data = await query.exec();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    } 
}

async function QueryFamilySixController(req, res, next) {
    let query = Question.findOne({ type: 'Family'}).limit( 6 );
    try {
        let data = await query.exec();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    } 
}

async function QueryFamilyNineController(req, res, next) {
    let query = Question.findOne({ type: 'Family'}).limit( 9 );
    try {
        let data = await query.exec();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    } 
}

async function QueryFoodThreeController(req, res, next) {
    let query = Question.findOne({ type: 'Food'}).limit( 3 );
    try {
        let data = await query.exec();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    } 
}

async function QueryFoodSixController(req, res, next) {
    let query = Question.findOne({ type: 'Food'}).limit( 6 );
    try {
        let data = await query.exec();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    } 
}

async function QueryFoodNineController(req, res, next) {
    let query = Question.findOne({ type: 'Food'}).limit( 9 );
    try {
        let data = await query.exec();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    } 
}

module.exports = {
    QueryEmotionThreeController,
    QueryEmotionSixController,
    QueryEmotionNineController,
    QueryFamilyThreeController,
    QueryFamilySixController,
    QueryFamilyNineController,
    QueryFoodThreeController,
    QueryFoodSixController,
    QueryFoodNineController,
};
