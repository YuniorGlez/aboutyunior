var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.sendStatus(200);
});
app.listen(8000, function () {
	console.log('Node app is running on port', 8000);
});
