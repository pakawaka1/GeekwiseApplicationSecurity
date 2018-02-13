const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
//const flash = require('connect-flash');
const expressHandlebars = require ('express-handlebars');
//const connect = require('connect');
const mongo = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myblog');
const db = mongoose.connection

const routes = require('./routes/index');

//Init App

const app = express();

//View Engine

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', expressHandlebars({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public' )));


//Express connect
//app.use(connect({
    //secret: 'secret',
    //saveUninitialized: true,
    //resave: true
//}));

//Connect Flash
//app.use(flash());

//Global Vars

//app.use(function (req, res, next) {
    //res.locals.success_msg = req.flash('success_msg');
    //res.locals.error_msg = req.flash('error_msg');
   // res.locals.error = req.flash('error');
    //next();
//});

app.use('/', routes);


//Set Port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
    console.log('Server started on port ' +app.get('port'));
});
