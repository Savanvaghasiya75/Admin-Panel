const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },  
    author_name : {
        type : String,
        required : true
    },
});

const Book = mongoose.model('Book',BookSchema);
module.exports = Book;