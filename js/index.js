const express = require('express'),
      http = require('http'),
      app = express(),
      server = http.createServer(app),
      io = require('socket.io')(server),
      mongo = require('mongoose');
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
require('./middleware/App')(app)

// Routers
app.get('/', (req, res)=>{
    res.render('index')
})

io.on('connection', (Socket) => {
    Socket.on('chat message', (msg)=>{
        io.emit('chat message', msg);
    })
})
io.on('connection', (socket) => {
   });