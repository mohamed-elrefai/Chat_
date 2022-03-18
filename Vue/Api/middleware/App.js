const express = require('express'),
      morgan = require('morgan'),
      cors = require('cors');

module.exports = (app) =>{
    app.use(morgan('dev'));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
}