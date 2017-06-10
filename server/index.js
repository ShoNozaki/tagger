const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

var router = require('./routes.js')
// bring in any express middleware functions and other libraries you need

// this will force the db/index.js module to run, establishing a database connection.
// you may or may not need to use the database connection in this index.js file.
// if you need to use it, assign the return value of require('./db') to a variable.
require('./db');

// create an express instance 
app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
// hook any middleware you need to into the express instance, including your route handlers
// hint: use the bodyParser middleware to parse the request body for POST & PUT requests.
app.use(router);
// serve the `../public/` folder using the express.static() middleware function
// (you will want to use the path library to correctly resolve the path to ../public.)
app.use(express.static(path.join(__dirname, '../public')));

// listen on this port:
const port = 5050;
app.listen(port, () => {
    console.log('Tagger is listening on 5050');
})