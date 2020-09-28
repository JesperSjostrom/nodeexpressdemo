var http = require('http');
var server = http.createServer(function(req,res){
res.write('Hello from Heroku');
res.write(req.url);
res.end();
});

server.listen(8080);

console.log('Server running on port 8080');