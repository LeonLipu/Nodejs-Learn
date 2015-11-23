

var fs  = require('fs ');
var child_process = require('child_process');

//Global object
console.log(__filename);
console.log(__dirname);

process.on('exit', function() {
  console.log("i am exiting ");
});

process.on('uncaughtException',function(code){

  console.log("hello "+code);

});
emitika();
