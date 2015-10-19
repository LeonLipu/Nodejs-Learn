
//date produce like Mon Oct 19 2015 11:09:28 GMT+0530 (India Standard Time)
var d=Date();
console.log(d);

//date as object
//Date [year ,month,hour,minutes,seconds,milliseconds]
var today=new Date(1995,11,2);

console.log(today);//Sat Dec 02 1995 00:00:00 GMT+0530

//for unix timestamp
var unixtimestamp=Date.now();//1445234106028  this epoc time
console.log(unixtimestamp);



var doj=new Date();
console.log(doj.getDate());
console.log(doj.getDay());
console.log(doj.getFullYear());
console.log(doj.getMonth());
console.log(doj.getSeconds());
