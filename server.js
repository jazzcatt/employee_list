var express = require('express');
var getData = require('./handlers').getData;
var addUser = require('./handlers').addUser;
//var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));

app.get('/load', function(req, res){
	getData(req, res);
});

app.post('/add', function(req,res){
	addUser(req, res);
});

app.listen(3000, function() {console.log("Open page on 3000 port")});

