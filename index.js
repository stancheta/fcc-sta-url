var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use('/', express.static('public'));

app.get('/:id', function() {
  console.log(req.params.id);
});

app.listen(port, function() {
  console.log('Now listening on port: ' + port);
})
