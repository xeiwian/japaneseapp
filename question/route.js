const express = require("express");
const route = express.Router();
const controller = require("./controller");
const models = require("./model");
const Survey = models.Survey;

// route.get("/", controller.ListQuestionController);
route.get("/emotion", controller.QueryEmotionQuestionController);
route.get("/family", controller.QueryFamilyQuestionController);
route.get("/food", controller.QueryFoodQuestionController);

module.exports = route;
