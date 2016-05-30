var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.all('*', function (req, res, next) {
	req.accepts('application/json');
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Methods', 'GET');
	next();
});
app.get('/', function (req, res) {
	res.sendStatus(200);
});
app.listen(8000, function () {
	console.log('Node app is running on port', 8000);
});
