var express = require('express');
var app = express();

var myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
};

app.get('/', function (req, res) {
  res.send('Hello World!');
}); 

app.use(myLogger);

app.get('/test', function (req, res) {
    res.send('zz');
}); 

app.listen(3000);