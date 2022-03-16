//APIs for authentication

const User = require("../models/User");
const bcrypt = require('bcrypt');
const passport = require("passport");
const salt = 10
const {validationResult} = require('express-validator')

// HTTP get - to load the signup form

exports.auth_signup_get = (req, res) =>{
    res.render("auth/signup")
}

// HTTP Post - signup to post the data

exports.auth_signup_post = (req, res) =>{
    console.log(req.body);

    let user = new User (req.body)
    console.log(req.body)

    let hash = bcrypt.hashSync(req.body.password, salt);
    console.log(hash)

    user.password = hash;

    // Save User
    user
    .save()
    .then(() => {
        res.redirect('/auth/signin')
    })
    .catch((err) => {

        if(err.code == 11000) {
            req.flash("error", "Email already exists")
            res.redirect('/auth/signin')
        } else {

            const errors = validationResult(req);
            if(!errors.isEmpty()){
                // res.status(400).json({errors: errors.array});
                req.flash("validationErrors", errors.errors)
            }
            res.redirect("/auth/signup")

            // console.log(err);
            // res.send(err);
        }
        // console.log(err)
        // res.send("ERRRRRRORRRR!!!!!!!!!")
    })
}

// HTTP GET sign in load the sign in form

exports.auth_signin_get = (req, res) =>{
    res.render("auth/signin")
}

// HTTP post the sign in to post the data

exports.auth_signin_post = 
    passport.authenticate("local", {
        successRedirect: '/',
        failureRedirect: '/auth/signin',
        failureFlash: 'Invalid username or password',
        successFlash: 'you are logged in successfully'
    })

// HTTP get logout to logout user

exports.auth_logout_get = (req,res) => {
    //this will clear the session
    req.logout();
    req.flash("success", "You are successfully logged out")
    res.redirect('/auth/signin')
}