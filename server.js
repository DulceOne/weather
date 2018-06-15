var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
var fs = require('fs');
var path = require('path');
var db = require('./db');
var bodyParser = require('body-parser');
var ObjectID = require('mongodb').ObjectID;
var session = require('express-session');
var cors = require('cors');
var request = require('request');
var data = require('./controller/data');
app.use(cors());

app.use(express.static(__dirname));
app.use (bodyParser.urlencoded ({
   	extended: true,
	limit: '50mb'
}));

app.use (bodyParser.json ({
   	extended: true,
	limit: '50mb'
}));
app.use(cookieParser());
app.use(session({
	secret:'da illest developer',
	resave:true,
	saveUnitialized:true
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(fileUpload());

app.get('/checkWeather',data.checkWeather);

db.connect('mongodb://localhost:27017/WeatherDB',function(err){
	if(err){
		return console.log(err);
	}
	app.listen(9000,function(){
		console.log("server started");
	})
});
