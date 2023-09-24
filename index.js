const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

const port = 8080;

app.use(express.json());
app.use(express.static(__dirname+'/public'));//serves up static files from the public directory (absolute path)

io.on('connection', socket => { //server connects with the client
    // console.log(`Client connnected...`);
    socket.on('chat', message=>{ //listens for messages from the client
        // console.log('From client: ', message);
        io.emit('chat', message); //emits an event to all connected clients
    })
})

server.listen(port, ()=>{
    console.log(`Server listening to on port ${port}...`);
})