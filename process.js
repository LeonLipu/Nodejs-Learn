process.on('exit', function() {
  console.log("i am exiting ");
});


process.on('uncaughtException',function(code){

  console.log("hello "+code);

});
emitika();
