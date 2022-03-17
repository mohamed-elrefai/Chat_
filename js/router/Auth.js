const router = require('express').Router(),
      User = require('../model/User'),
      JWT = require('jsonwebtoken'),
      bcrypt = require('bcrypt'),
      passport = require('passport'),
      { forwardAuthenticated } = require('../config/AuthConfig'),
      multer = require('../Upload/App');

// Cookie JWT
const maxAge = 3*24*60*60;
const createCookie = (id)=>{
    return JWT.sign({id}, 'net mohamed', {expiresIn: maxAge})
}

// Get Login & Register Page
router.get('/signin', forwardAuthenticated, (req, res)=> res.render('Login'))
router.get('/signup', forwardAuthenticated, (req, res)=> res.render('Register'))

// Post Data
router.post('/register', multer.single('img'),async (req, res)=>{
    const {fname, lname, email, password, password2} = req.body;
    const img = req.file.filename;

    let error = [];
    if (password.length <= 6) error.push({msg: "password length max 6"})
    if(error.length > 0){ // Check error length
        res.render('register', {
            error, fname, lname, email, password, password2
        })
    }else{
        await User.findOne({email: email})
            .then(result => {
                if(result){
                    error.push({msg: "email is already registered"});
                    res.render('register', {// user exists
                        error, fname, lname, email, password, password2
                    })
                    
                }else{
                    const newUser = User({
                        fname, lname, email, password,img
                    });
                    bcrypt.genSalt(10, (err, salt)=>{
                        bcrypt.hash(newUser.password, salt, (err, hash)=>{
                            if (err) throw  err;
                            newUser.password = hash;
                            newUser.save()
                                .then(user => {
                                    const token = createCookie(user._id);
                                    res.cookie("__set", token, {httpOnly: true, expiresIn:maxAge * 1000});
                                    req.flash('success_msg', 'You are new user 😁')
                                    res.redirect('/signin')
                                })
                        })
                    })
                }
            })
    }
})

// Login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
});

// Logout
router.get('/logout', (req, res)=>{
    req.logout();
    req.flash('success_msg', "احا مشيت ليه");
    res.redirect('/signin');
})
module.exports = router;