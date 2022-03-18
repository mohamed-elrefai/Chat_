const express = require('express'),
      app = express(),
      mongo = require('mongoose');
require('dotenv').config();

// Connect mongoose Database
const port = process.env.PRT || 1999
mongo.connect(process.env.DATABASEURL)
    .then(result => {
        app.listen(port, ()=>{
            console.log(`http://localhost:${port}`)
        })
    })

// Middleware
require('./middleware/App')(app)

// Routers