const Book = require("../../../models/Book")


module.exports.apiAddDetalis = function(req,res){
    // console.log('api controller is working');
    Book.create(req.body)
    
}