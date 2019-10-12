const express = require('express');
const mongoose = require('mongoose');
// eslint-disable-next-line
const Entries = require('./api/models/entryModel'); //created model loading here
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/entrydb', { useNewUrlParser: true, useUnifiedTopology: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const routes = require('./api/routes/entryRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log(`Kitsune RESTful API server started on: ${port}`);