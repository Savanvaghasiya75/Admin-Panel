const mongoose = require('mongoose');
const path = require('path');

const SubCatagorySchema = mongoose.Schema({
    catagoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref :  'Catagory'
    },
    SubCatagory_name : {
        type : String,
        required : true
    }
})

const SubCatagory = mongoose.model('SubCatagory',SubCatagorySchema)
module.exports = SubCatagory;