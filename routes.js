const express = require("express");
const route = express.Router();
const questionRoutes = require("./question/route");
const userRoutes = require("./user/route");

// Main Routes setup
route.use("/question", questionRoutes);
route.use("/userlogin", userRoutes);

// Handles no matching url
route.use((req, res, next) => {
    const err = new Error("404 not found.");
    err.status = 404;
    next(err);
});

module.exports = route;
