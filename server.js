var express = require('express');
var app = express();

app.use(express.static(__dirname + '/view'));
app.use(express.static(__dirname + '/scripts'));

app.get('/', function(req, res) {
	res.sendFile('/index.html');
});

app.get('/admin', function(req, res) {
	res.sendFile(__dirname +'/view/admin.html');
});

app.listen(8080);

console.log("Listening at port 8080");