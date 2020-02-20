const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require("./routes");
const bodyParser = require("body-parser");

const mongoDB = 'mongodb://localhost:27017/appdb';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

// for parsing application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// for parsing json data
app.use(bodyParser.json());

// API Endpoints
app.use("/api", apiRoutes);

// app.get('/api/customers', (req, res) => {
//     // usually this info is queried from a database
//     const customers = [
//         {id: 1, firstName: 'John', lastName: 'Doe'},
//         {id: 2, firstName: 'Mary', lastName: 'Dodo'},
//     ];
//     res.json(customers);
// });

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));