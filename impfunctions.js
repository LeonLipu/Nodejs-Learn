
//string to int ------------------parseInt
//if it is not able to convert it will thorw NaN error
//first argument is number and second argument is base
console.log("************** parseInt *********************");
console.log(parseInt("100"));
console.log(parseInt("this is nothing 1000"));
console.log(parseInt("100",16));


//int to string -----------------String
//String (object)
console.log("************** String *********************");

var str=String(1)+1;
console.log(str);
console.log(Date());

//string to float ---------parseFloat
console.log("************** parseFloat *********************");

console.log(parseFloat("2.2")+2.2);

//float to string -------String
console.log("************** String *********************");

console.log(String(2.2)+2.2);

//html to string
console.log("************** encodeURI *********************");

var str='<html> my name is "brahmandanda kar "  </html>';
var string=encodeURI(str);
console.log(string);

//string to html
console.log("************** decodeURI *********************");

var html =decodeURI(string);
console.log(html);

//get epoc value
console.log("************** Number *********************");

var epoc=Number(new Date());
console.log(epoc);

//to check right operation
console.log("************** isNaN *********************");

console.log(isNaN(1+'a'));

//to evaluate expression
console.log("************** eval *********************");

var sum=eval("9+2+(8*9)+34");
console.log(sum);


var hello = "something ";
console.log(hello);


var array = [];
for (var i = 0; i < 5; i++) {
  array.push(function() {
    console.log(i);
  })
}


//here 2 is expecting and turn out to be 5 whyy?????????
array[2]();

//because first varible is assined to first and then evlauetion start there after

var array2 = [];
for (var i = 0; i < 5; i++) {

  (function(i) {

    array2.push(function() {
      console.log(i);
    });

  })(i);
}

array2[2]();


//typeof gives primitive type of variable
//array ,null ,date is object
//null is object

console.log(typeof 2); //is number
console.log(typeof null);//is object

//instanceof checks prototype chain contructor if found return true
console.log([] instanceof Array); //return true
console.log({} instanceof Array); //return false

//constructor checks internal prototype which could be overriden by code
console.log([].constructor());//return []


//some random uses in real time scenario

//get random item from array

var arr=["hi",'hello','nothing','something','world','cat'];
var item = arr[Math.floor(Math.random()*arr.length)];
console.log(item);


//get random number with specific range
var min =10,max=20;
var num=Math.floor(Math.random()*(max-min+1))+min;
console.log(num);

//generating arr with some specific value

var ar=[],max=10;
for(var i=0;ar.push(i++)<max;);

console.log(ar);

//shuffled array

var arr2 =["hi","hello","something","nothing",'many','may ','be','and'];

arr2=arr2.sort(function(){

  return Math.random()-0.5;
});

console.log("suffled array");
console.log(arr2);

//appending an arry to another array
var arr3 =[3,6];
var arr4=[6,7];
[].push.apply(arr3,arr4);
console.log(arr3);

//getting max and minmum number of arry
var arr5=[33,44,55,22,11,777,23,52,555,63];

var max =Math.max.apply(Math,arr5);
var min=Math.min.apply(Math,arr5);

console.log(max);
console.log(min);
