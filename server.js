const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3030;
// const api = require('./backend/routes');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

const server = app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit localhost:${PORT}/ in your browser.`);
});

const io = require('socket.io')(server);
console.log('inside server', PORT);
// Socket handler
io.on('connection', socket => {
  console.log('connected');
  socket.on('username', username => {
    if (!username || !username.trim()) {
      return socket.emit('errorMessage', 'No username!');
    }
    socket.username = String(username);
  });

  socket.on('room', requestedRoom => {
    if (!socket.username) {
      return socket.emit('errorMessage', 'Username not set!');
    }
    if (!requestedRoom) {
      return socket.emit('errorMessage', 'No room!');
    }
    if (socket.room) {
      socket.leave(socket.room);
    }
    socket.room = requestedRoom;

    let timeStamp = new Date();

    socket.join(requestedRoom, () => {
      socket.to(requestedRoom).emit('message', {
        timeStamp: timeStamp,
        user: 'MadFlatter',
        content: `${socket.username} has joined`
      });
    });
  });

  socket.on('edit', editData=>{
    socket.to(editData.roomName).emit('edit', editData);
  });

  socket.on('message', message => {
    if (!socket.room) {
      return socket.emit('errorMessage', 'No rooms joined!');
    }
    socket.to(socket.room).emit('message', {
      timeStamp: message.timeStamp,
      user: socket.username,
      content: message.content
    });
  })

});
