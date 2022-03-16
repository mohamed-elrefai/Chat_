var Socket = io();

var form = document.querySelector('form');
var input = document.querySelector('input');
var messages = document.getElementById('messages');


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(input.value){
        Socket.emit('chat message', input.value);
        input.value = '';
    }
})
io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
