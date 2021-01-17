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

  //   socket.on('input', ({ userInput }) => {
  //       console.log(userInput, 'user input');
  //       io.emit('input', { input: userInput })
  //   });

      socket.on('calculation', ({ calculation }) => {
        console.log(calculation, 'calc');
        io.emit('calculation', { calculation })
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
  });

server.listen(PORT, () => {
  console.log('listening on *:5000');
});