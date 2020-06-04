var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

var logger = require('./logger');

var champCard = require('./champCards');
console.log("== champions:", champCard);

var champData = require('./champData');
console.log("== champion's full:", champData);

app.use(logger);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname+ "/public"));



app.get('/', function(req, res){
	res.status(200).render('homepage',{
		Champions: champCard
	});
});


app.get('/Champions/:name', function (req, res, next) {
	console.log("== req.params:", req.params);
	var name = req.params.name;
	if (champData[name]) {
		res.status(200).render('championPage',champData[name]);
	} else {
		next();
	}
});

app.get('*', function (req, res) {
	res.status(404).render('404');
});

app.listen(port, function () {
	console.log("== Server is listening on port", port);
});
