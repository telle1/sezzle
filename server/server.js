const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('calculation', ({ calculation }) => {
    console.log(calculation, 'calc');
    io.emit('calculation', { calculation });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
}



server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
