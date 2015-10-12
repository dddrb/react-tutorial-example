var fs = require('fs');

var channel = function(io) {
  io.on('connection', function(socket) {
    socket.on('search comments', function(){
      fs.readFile('db/comments.json', function(err, data) {
        socket.emit('recieve comments', JSON.parse(data));
      });
    });

    socket.on('create comment', function(comment){
      fs.readFile('db/comments.json', function(err, data) {
        var comments = JSON.parse(data);
        comments.push(comment);
        fs.writeFile('db/comments.json', JSON.stringify(comments, null, 4), function(err) {
          socket.emit('recieve comments', comments);
        });
      });
    });

    setInterval(function(){
      fs.readFile('db/comments.json', function(err, data) {
        socket.emit('recieve comments', JSON.parse(data));
      });
    }, 2000);
  })
};

module.exports = channel;
