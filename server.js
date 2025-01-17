const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require("./routes");
const bodyParser = require("body-parser");
var path = require('path');

mongoose.connect(process.env.MONGOLAB_URL || 'mongodb://localhost:27017/appdb', {useNewUrlParser: true, useUnifiedTopology: true, dbName: 'appdb'});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

// for parsing application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production"){
    // for parsing json data
    app.use(bodyParser.json());
    // Priority serve any static files.
    app.use(express.static(path.join(__dirname, './client/build')));
    app.use("/api", apiRoutes);
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './client/build', 'index.html'));
    });
} else {
    app.use(bodyParser.json());
    // API Endpoints
    app.use("/api", apiRoutes);
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));