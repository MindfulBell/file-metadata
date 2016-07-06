var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var routes = require('./routes/index.js');

routes(app);

app.listen(PORT, function(){
	console.log('Server listening on port...' + PORT)
});