const express =require('express'),
      morgan = require('morgan'),
      cors = require('cors'),
      session = require('express-session'),
      flash = require('connect-flash'),
      expressLayouts = require('express-ejs-layouts');

module.exports = (app, passport) => {
    // EJS
    app.use(expressLayouts);
    app.set('view engine', 'ejs');
    // Morgan
    app.use(morgan('dev'));
    // Connect flash
    app.use(flash());
    app.use( // Express session
        session({
            secret: 'secret',
            resave: true,
            saveUninitialized: true
        })
    );
    // Global variables
    app.use(function(req, res, next) {
        res.locals.success_msg = req.flash('success_msg');
        res.locals.error_msg = req.flash('error_msg');
        res.locals.error = req.flash('error');
        next();
    });
    // Express body parser
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static('layouts/css'))
    app.use(express.static('layouts/js'))
    app.use( express.static('images'))
    // Passport middleware
    app.use(passport.initialize());
    app.use(passport.session());
}