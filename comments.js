// Create web server
var express = require('express');
var app = express();

// Create a route for the root path
app.get('/', function(request, response) {
  response.send('Hello, World!');
});

// Start the server
app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});