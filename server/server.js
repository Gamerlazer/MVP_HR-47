var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var router = require('./router');

// Create a new instance of the server
var app = express();

// Middleware for logging and parsing
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api', router);

// send Static files
app.use(express.static(__dirname + '/../client/'));

// define port number
var port = 1337;

app.listen(port);
console.log('Listening on http://127.0.0.1:' + port);




