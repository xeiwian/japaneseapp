const express = require("express");
const route = express.Router();
const controller = require("./controller");
const models = require("./model");
const Survey = models.Survey;

// route.get("/", controller.ListQuestionController);
route.get("/emotionthree", controller.QueryEmotionThreeController);
route.get("/familythree", controller.QueryFamilyThreeController);
route.get("/foodthree", controller.QueryFoodThreeController);
route.get("/emotionsix", controller.QueryEmotionSixController);
route.get("/familysix", controller.QueryFamilySixController);
route.get("/foodsix", controller.QueryFoodSixController);
route.get("/emotionnine", controller.QueryEmotionNineController);
route.get("/familynine", controller.QueryFamilyNineController);
route.get("/foodnine", controller.QueryFoodNineController);

module.exports = route;
