var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sandbox');
var app = express();


//Database Models
var settings = require('./app/models/settings');
var menuElements = require('./app/models/menuElements');
//Fetch Data
var t1="Yok";
settings.findOne({},function(err,result){
    if(err) throw err;
    t1 = result.title;
});

var menuDat="";
menuElements.findOne({},function(err,result){
    if(err) throw err;
    menuDat = result.name;
    console.log(menuDat);
});
//View Engines
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('pages/main');
});
app.get('/about',function(req,res){
    res.render('pages/about',{title:t1,menuElements:menuDat});
});

//Stream
app.listen(8080);