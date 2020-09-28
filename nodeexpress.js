var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/websites'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/websites/index.html');
});

server.listen(3000);