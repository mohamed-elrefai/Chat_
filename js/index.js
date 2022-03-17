const express = require('express'),
      http = require('http'),
      app = express(),
      server = http.createServer(app),
      io = require('socket.io')(server),
      mongo = require('mongoose'),
      Auth = require('./router/Auth.js'),
      chat = require('./router/Chat'),
      {ensureAuthenticated,forwardAuthenticated} = require('./config/AuthConfig'),
      passport = require('passport');
require('./config/passport')(passport)
require('dotenv').config();
// Connect wit MongoDB
const port = process.env.PORT || 1999;
mongo.connect(process.env.DATABASEURL, { useNewUrlParser: true ,useUnifiedTopology: true })
    .then(result => {
        server.listen(port, ()=>{
            console.log(`http://localhost:${port}`)
        })
    }).catch(err => console.log(err))

//middleware
require('./middleware/App')(app, passport)

// Routers
app.use(Auth);
app.use(chat);

// Socket Section
io.on('connection', (Socket) => {
    Socket.on('chat message', (msg)=>{
        io.emit('chat message', msg);
    })
})
io.on('connection', (socket) => {
   });