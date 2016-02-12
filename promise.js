//promise.all
console.log("promise.all");

var p1=new Promise(function(resolve,reject ){

setTimeout(resolve,300,"foo");
});

Promise.all([p1]  ).then(function(values){
  console.log(values);
});
