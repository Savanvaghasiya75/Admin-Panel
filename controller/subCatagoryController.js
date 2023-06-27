const path = require('path');
const Catagory = require('../models/catagory');
const SubCatagory = require('../models/subCatagory');


module.exports.subCatagoryPage = (req,res)=>{
    Catagory.find({},function(err,catValue){
        if(err){
            console.log(err);
            return false;
        }
        // console.log(catValue);
        return res.render('addSubCatagory',{
            'catRec' : catValue
        });
    });
}

module.exports.SubCatagoryValue = function(req,res){
    // console.log(req.body);
    SubCatagory.create(req.body,function(err,subValue){
        if(err){
            console.log(err);
            return false;
        }
        // console.log(subValue);
        return res.redirect('back');
    });
}

module.exports.viewSubCatagoryPage = async function(req,res){
    let data = await SubCatagory.find({}).populate('catagoryId').exec();
    if(data){
        // console.log(data);
        return res.render('view_SubCatagory',{data : data});
    }
}   

module.exports.deleteSubCatageryRec = function(req,res){
    SubCatagory.findByIdAndDelete(req.query.id,function(err,record){
        if(err){
            console.log(err);
            return false;
        }
    })
    return res.redirect('back');

}

module.exports.udpateSubCatageryPage = function(req,res){
    Catagory.findById(req.query.id,function(err,updateRecc){
        if(err){
            console.log(err);
            return false;
        }
        return res.render('updateSubCatagory',{
            'updateRecc' : updateRecc
        })
    })
    SubCatagory.findById(req.query.id,function(err,record){
        if(err){
            console.log(err);
            return false;
        }
        return res.render('updateSubCatagory',{
            'updateRec' : record
        })
    });
}