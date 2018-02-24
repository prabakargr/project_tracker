var express=require('express');
//users router imported
var usersRouter=require('./users/usersRouter');
//projects router imported
var projectsRouter=require('./projects/projectsRouter');

var mongoose=require('mongoose');

var bodyParser=require('body-parser');

var db=mongoose.connect("mongodb://project:tracking@ds229648.mlab.com:29648/project_tracking")

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use ('/users',usersRouter);//users

app.use ('/projects',projectsRouter);//projects



var port=process.env.PORT || '3000';

app.set('port',port);

app.listen(port, () => console.log(`Running on localhost:3000`));