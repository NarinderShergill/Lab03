var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/narinder');
});

// about page
app.get('/dhian', function(req, res) {
  res.render('pages/dhian');
});

// about page
app.get('/jarnail', function(req, res) {
    res.render('pages/jarnail');
  });

// about page
app.get('/kamalpreet', function(req, res) {
    res.render('pages/kamalpreet');
  });

// about page
app.get('/daljit', function(req, res) {
    res.render('pages/daljit');
  });

app.listen(8000);
console.log('Server is listening on port 8000');
