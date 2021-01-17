const express= require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', socket => {
    console.log('a user connected');

    socket.on('input', ({ test }) => {
        console.log(test, 'user input');
        io.emit('input', { test })
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
  });

server.listen(PORT, () => {
  console.log('listening on *:5000');
});