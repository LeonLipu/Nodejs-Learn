
//this is about http protocol

var http = require('http');

http.createServer(function(request,respose){


  respose.writeHead('content-type','text/plain');
  respose.end("brahmanda kar");


}).listen(3333);
console.log("http server is started on port 3333");

//curl localhost:3333 to see server is running
