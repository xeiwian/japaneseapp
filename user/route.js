const express = require("express");
const route = express.Router();
const controller = require("./controller");

route.post("/", controller.CreateUserController);
route.get("/", controller.RetrieveUserController);

module.exports = route;