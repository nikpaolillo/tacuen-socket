const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || '3000'

const session = require("./src/api/routes/session");

app.use('/api/session', session)

const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
    socket.on('prueba', (msg) => {
        console.log('socket funcionando');
    });

    console.log('a user connected');
});

global.io = io

server.listen(3000, () => {
    console.log('listening on *:3000');
});
