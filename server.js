var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.engine('.html', require('ejs').renderFile);


app.get('/chewy', function(req, res, next) {
	console.log("HEY FROM CHEWY")

	return res.render('test.html');
});

app.get('/walt', function(req, res, next) {
	return res.json({ user: 'Walt' })
});

function helloWorld() {
	return 'Hello World';
}

function youName(name) {
	return "HEY " + name + ", Nice to meet you!";
}

var server = app.listen(3001, function() {
	var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});