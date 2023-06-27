const express = require('express');
const port = 9000;
const server = express();
const path = require('path');

const db = require('./config/mongoose');

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const flash = require('connect-flash');
const middleWere = require('./config/flash');
const cookieParser = require('cookie-parser');

const expressLayout = require('express-ejs-layouts');

server.use(cookieParser());
server.use(express.urlencoded());

server.set('view engine','ejs');
server.set('views',path.join(__dirname,'views'));

server.set('layout', 'layout/master');

server.set('login', { layout: 'login' });


server.use(expressLayout);
// server.use(express.static(path.join(__dirname,"assets")));
server.use(express.static('assets'));

server.use('/uploads',express.static(path.join(__dirname+'/uploads')));

server.use(session({
    name : 'savan',
    secret : 'vaghasiya',
    saveUninitialized : false,
    resave : false,
    cookie :{ 
        maxAge :1000*60*100
    }
}))

server.use(passport.initialize());
server.use(passport.session());
server.use(passport.setAutheticatedUser);

server.use(flash());
server.use(middleWere.setFlash);


server.use('/',require('./routes'))


server.listen(port,function(err){
    if(err){
        console.log('server is not started');
        return false;
    }
    console.log('server is starting on port : ',port);
})

