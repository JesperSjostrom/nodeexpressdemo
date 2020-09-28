var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/websites'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/websites/index.html');
});