const express = require("express");
const route = express.Router();
const controller = require("./controller");
const models = require("./model");
const Survey = models.Survey;

// route.get("/", controller.ListQuestionController);
route.get("/", controller.QueryEmotionQuestionController);

module.exports = route;
