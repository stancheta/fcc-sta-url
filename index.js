var express = require('express');
var app = express();
var staURL = require('./lib/staURL');
var handleNewURL = staURL.handleNewURL;
var retreiveURL = staURL.retreiveURL;

var port = process.env.PORT || 8080;

app.use('/', express.static('public'));

app.use('/new/https://:url', function(req, res) {
  res.send(handleNewURL('https://' + req.params.url));
});

app.use('/new/http://:url', function(req, res) {
  res.send(handleNewURL('http://' + req.params.url));
});

app.use('/new/:url', function(req, res) {
  res.send(handleNewURL(req.params.url));
});

app.get('/:id', function(req, res) {
  retreiveURL(req.params.id, function(err, url) {
    var errMessage = {};
    errMessage.error = 'This url is not on the database.';
    if(err) {
      console.log(err);
      res.send(errMessage);
    }
    else {
      res.redirect(url);
    }
  })
});

app.listen(port, function() {
  console.log('Now listening on port: ' + port);
});
