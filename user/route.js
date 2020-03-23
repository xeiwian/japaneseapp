const express = require("express");
const route = express.Router();
const controller = require("./controller");

route.post("/", controller.CreateUserController);
route.put("/:id", controller.UpdateUserController);
route.get("/:id", controller.RetrieveUserController);

module.exports = route;