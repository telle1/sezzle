const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');

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

// app.get('/', (req, res) => {
//   res.send('Hello World Test!')
// })

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static('client/build'));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    if (err) {
      console.log(err)
      res.status(500).send(err)
    }
  });
}

const PORT = process.env.PORT || 5000;


server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
