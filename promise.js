//promise.all
console.log("promise.all");

var p1=new Promise(function(resolve,reject ){
setTimeout(resolve,300,"foo");
});
Promise.all([p1]  ).then(function(values){
  console.log(values);
});
//*******************************
var p1=new Promise(function(resolve,reject){
  reject('success');
});

p1.then (function (data){
  console.log("it called when resolve ");
},function(data){
  console.log("it is called when reject statement is done ");
throw 'othing'
}).then (function(){
  console.log("it is success ");
},function(){
  console.log("it is failure ");
}).then (function(){
  console.log("ss");
},function(){
  console.log("ff");
});

//once result is published then it is reset to frue

//***********it is now chaining *************************
var p2=new Promise(function(resolve ,reject ){
resolve(1);
});

p2.then(function(value){
  console.log(value);
  return value+2;
}).then(function(value){
  console.log(value);
});

console.log("//**********************************************************");

//race condition
var pr1=new Promise(function(resolve,reject)
{
setTimeout(resolve,200,"ananda")
});

var pr2=new Promise(function(resolve,reject){
  setTimeout(resolve,300,"brahmanand");
});

Promise.race([pr1,pr2]).then(function(data){
  console.log(data);// anandaa since it less time 
});
