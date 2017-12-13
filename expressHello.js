var express = require("express");
var app = express();

app.get('/',function(req,res){
	res.send("Welcome to the world of expressJS\n");
}).listen(8080);