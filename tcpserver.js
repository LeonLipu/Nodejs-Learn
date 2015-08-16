

//This is tcp server

var net = require('net');

var server =net.createServer(function (socket){

  socket.write("echo server is running");
  //socket.pipe(socket);


  socket.on('data',function(data){

//write back to client

    socket.write(data);

//write into the console
    console.log("clinet given data: "+data);


  });

});

server.listen(4444);

//to test app node this file name and other terminal telnet localhost 4444
