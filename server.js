var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('index')
});

server.listen(port, function() {
  console.log("Server listening on http://localhost:" + port);
});

module.exports = server;