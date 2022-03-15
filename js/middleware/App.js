const express = require('express'),
      morgan = require('morgan'),
      cors = require('cors'),
      expressLayouts = require('express-ejs-layouts');

module.exports = app =>{
    app.use(express.urlencoded({extended: true}))
    app.use(expressLayouts);
    app.set('view engine', 'ejs');
    app.use(morgan('dev'));
    app.use(cors());
    app.use(express.static("layouts/css"))
    app.use(express.static("layouts/js"))
}