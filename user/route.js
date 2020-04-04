const express = require("express");
const route = express.Router();
const controller = require("./controller");

route.post("/", controller.CreateUserController);
route.put("/:id", controller.UpdateUserController);
route.get("/:id", controller.RetrieveUserController);
route.put("/addwords/:id", controller.addWords);
route.put("/addchosenwords/:id", controller.addChosenWords);
route.get("/getnine/:id", controller.getWords);
route.get("/getchosenwords/:id", controller.getChosenWords);

module.exports = route;