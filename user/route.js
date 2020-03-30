const express = require("express");
const route = express.Router();
const controller = require("./controller");

route.post("/", controller.CreateUserController);
route.put("/:id", controller.UpdateUserController);
route.get("/:id", controller.RetrieveUserController);
route.put("/addwords/:id", controller.addWords);
route.get("/getnine/:id", controller.getNineRandWords);

module.exports = route;