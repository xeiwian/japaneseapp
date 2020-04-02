const models = require("./model");
const User = models;

/**
 * Creates a student record in the server.
 * Students completed the quiz will have records(color) saved on server.
 * Students that did not complete quiz but went on to book will also have
 * some records and details saved.
 * @param {Function} req
 * @param {Function} res
 * @param {Function} next
 */
async function CreateUserController(req, res, next) {
    let body = req.body;
    // console.log("[WTF]", req.body);
    try {
        let data = await User.create({
            name: body.name,
            earlyscore: body.earlyscore,
            emotionscore: body.emotionscore,
            familyscore: body.familyscore,
            foodscore: body.foodscore,
            words: body.words,
            chosenwords: body.chosenwords,
            finalscore: body.finalscore
        });
        res.status(201).json({
            _id: data._id,
            name: data.name,
            earlyscore: body.earlyscore,
            emotionscore: body.emotionscore,
            familyscore: body.familyscore,
            foodscore: body.foodscore,
            words: body.words,
            chosenwords: body.chosenwords,
            finalscore: body.finalscore
        });
        // res.send(data);
        // console.log(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        console.log(err);
        return;
    }
}

async function UpdateUserController(req, res, next) {
    let body = req.body;
    body._id = req.params.id;
    console.log('update body', body)
    try {
        await User.updateOne({ _id: req.params.id }, body, {
            runValidators: true
        });
        res.status(200).json();
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

async function RetrieveUserController(req, res, next) {
    let query = User.findById(
        { _id: req.params.id },
        "_id name earlyscore emotionscore familyscore foodscore words chosenwords finalscore"
    );
    try {
        let data = await query.exec();
        if (data === null) {
            res.status(404).json({
                err: "Document with that id does not exist."
            });
            return;
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

async function addWords(req, res, next) {
    let body = req.body;
    body._id = req.params.id;

    console.log(body);
    try {
        await User.updateOne({ _id: req.params.id }, { $push: { words: body } }, {
            runValidators: true
        });
        res.status(200).json();
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

async function getWords(req, res, next) {
    let query = User.findById({ _id: req.params.id }, 'words');
    try {
        let data = await query.exec();
        if (data === null) {
            res.status(404).json({
                err: "Document with that id does not exist."
            });
            return;
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

module.exports = {
    CreateUserController,
    UpdateUserController,
    RetrieveUserController,
    addWords,
    getWords
};
