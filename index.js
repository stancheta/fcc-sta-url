var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use('/', express.static('public'));

app.use('/new/:url', function(req, res) {
  res.send(req.params.url);
})

app.get('/:id', function(req, res) {
  res.redirect('http://google.com');
});

app.listen(port, function() {
  console.log('Now listening on port: ' + port);
})
