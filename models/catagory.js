const mongoose = require('mongoose');
const path = require('path');

const CatagorySchema = mongoose.Schema({
    gender : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    }
})

const Catagory = mongoose.model('Catagory',CatagorySchema);
module.exports = Catagory;