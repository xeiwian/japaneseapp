const express = require("express");
const route = express.Router();
const controller = require("./controller");
const models = require("./model");
const Survey = models.Survey;

// route.get("/", controller.ListQuestionController);
route.get("/emotion", controller.QueryEmotionContentController);
route.get("/family", controller.QueryFamilyContentController);
route.get("/food", controller.QueryFoodContentController);

module.exports = route;
