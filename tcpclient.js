var net = require('net');

var client = new net.Socket();

client.connect(4444,'127.0.0.1',function () {

  console.log("client is invoked ");

  client.write("I love you brahmananda");

});

client.on('data',function(data){

  console.log("recived data "+data);

  client.write(data);
//client.destroy();
});


client.on('close',function (){

  console.log('connection is closed');
});
