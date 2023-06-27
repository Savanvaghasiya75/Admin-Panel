const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/bloging");

const db = mongoose.connection;

db.on('error',console.error.bind("error",'mongo not connected'));

db.once('open',function(err){
    if(err){
        console.log('err');
        return false;
    }
    console.log('db is connected');
})

module.exports = db;