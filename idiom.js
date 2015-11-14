//console contains

var str="i have something to say and it would be better and which need to have so that ";
 if(!!~str.indexOf("something")){

 console.log("string got match with idioms ");
 }


 var int =8.77;
 console.log(~~int);//to get decimal value parse int (int ,10)
 console.log(+"10");
console.log(int >> 0);
!function (){console.log("self execution function ");}();
+function (){console.log("self execution function ")}();


ab("something ","this is not an something and","  it would not be permanate and which would mahabhuta gouri kali jiba puri ")

  function ab (){
console.log(arguments);

var arr=Array.prototype.slice.call(arguments);
var arr=[].slice.call(arguments);

var type ={}.toString.call(arr);
console.log(arr);
console.log(type);

//this would give type of object which overwirte type of object
console.log({}.toString.call(arguments));

  }
