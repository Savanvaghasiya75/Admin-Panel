const passport = require('passport');

const passportLocal = require('passport-local').Strategy;

const Admin = require('../models/admin');

passport.use(new passportLocal({
    usernameField : 'email'
},function(email,password,done){
    Admin.findOne({email : email},function(err,user){
        if(err){
            console.log('Email can not match');
            return done(null,err);
        }
        if(!user || user.password != password)
        {
            console.log('User and Password is not Match');
            return done(null,false);
        }
        // console.log(user);
        return done(null,user);
    })
}))

passport.serializeUser(function(user,done){
    return done(null,user.id);
});

passport.deserializeUser(function(id,done){
    Admin.findById(id,function(err,user){
        if(err){
            console.log('user not found');
            return done(null,false);
        }
        return done(null,user);
    })
})

passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/');
}

passport.setAutheticatedUser = function(req,res,next){
    // console.log(req.user);
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    return next();
}

module.exports = passport;