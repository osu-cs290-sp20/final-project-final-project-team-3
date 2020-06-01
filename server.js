var path = require('path');
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var logger = require('./logger');

app.use(logger);


app.use(express.static(__dirname+ "/public"));



app.get('/', function(req, res){
	res.status(200).sendFile(path.join(__dirname + "/public/index.html"));
});

var legends = [ 
	'aphelios',
	'ashe',
	'azir',
	'caitlyn',
	'corki',
	'draven',
	'ezreal',
	'graves',
	'jayce',
	'jhin',
	'jinx',
	"kai'sa",
	'kalista',
	'kennen',
	'kindred',
	"kog'maw",
	'lucian',
	'miss_fortune',
	'quinn',
	'senna',
	'sivir',
	'teemo',
	'tristana',
	'twitch',
	'varus',
	'vayne',
	'xayah'
];

app.get('/Champions/:name', function (req, res, next) {
  console.log("== req.params:", req.params);
  var name = req.params.name;
  if (legends.indexOf(name) >= 0) {
    res.status(200).sendFile(
      __dirname + "/public/Champions/" + name + ".html"
    );
  } else {
    next();
  }
});

app.get('*', function (req, res) {
	res.status(404).sendFile(path.join(__dirname + "/public/404.html"));
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
