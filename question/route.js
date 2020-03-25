const express = require("express");
const route = express.Router();
const controller = require("./controller");
const models = require("./model");
const Survey = models.Survey;

// route.get("/", controller.ListQuestionController);
route.get("/emotionthree", controller.QueryEmotionThreeController);
route.get("/familythree", controller.QueryFamilyThreeController);
route.get("/foodthree", controller.QueryFoodThreeController);

module.exports = route;
