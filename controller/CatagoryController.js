const Catagory = require('../models/catagory');
const fs = require('fs');
const path = require('path');
const { emitWarning } = require('process');

module.exports.AddCatagory = function(req,res){
    return res.render('addCatagory');
}

module.exports.AddCatagoryInfo = function(req,res){
    Catagory.create({
        gender : req.body.gender,
        name: req.user.name
    },function(err){
        if(err){
            console.log('record is not inserted');
            return false;
        }
        return res.redirect('/Catagory/viewCatagoryPage');
    });
}

module.exports.viewCatagoryPage = function(req,res){
    Catagory.find({},function(err,record){
        if(err){
            console.log('Record is not find');
            return false;
        }
        res.render('viewCatagory',{
            'viewRecord' : record
        })
    })
}

module.exports.deleteCatagoroy = function(req,res){
    Catagory.findByIdAndDelete(req.params.id,function(err,record){
        if(err){
            console.log('Data is not deleted');
            return false;
        }
    })
    return res.redirect('back');
}

module.exports.udpateCatagoroy = (req,res) =>{
    Catagory.findById(req.params.id,function(err,catData){
        if(err){
            console.log(err);
            return false;
        }
        return res.render('updateCatagory',{
            'catRecord' : catData 
        });
    })
}

module.exports.updateCatagoryData = (req,res)=>{
    // console.log(req.body.catagory_hid);
    // console.log(req.body.gender);
    Catagory.findByIdAndUpdate(req.body.catagory_hid,{
        gender : req.body.gender
    },function(err,UpdateRec){
        if(err){
            console.log(err);
            return false;
        }
        return res.redirect('/Catagory/viewCatagoryPage')
    });
}