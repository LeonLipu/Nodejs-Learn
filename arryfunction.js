var arr=["some",'hello','world','may','not'];

//foreach for traversing
arr.forEach(function(ele,index,ar){
  console.log(ele);
});

//map for manupulating
var mrr=arr.map(function(ele,index,ar){
  return ele+"M";
});
console.log(mrr);

//filter for array based on condition
var frr=arr.filter(function(ele,index,ar){
  return ele.length>3;
});
console.log(frr);

//some is OR operation which applied to every element of array
var boo=arr.some(function(ele,index,ar){
  return ele.length>4;
});
console.log(boo);

//every is AND opearation which applies to every element of array
var boo =arr.every(function (ele,index,ar){
return ele.length>4
});
console.log(boo);

//reduce arry from left  by preserving previous result
console.log("************reduce *******************");
var intarr=[3,5,6,7,3,6,2];
var cumulativesum=intarr.reduce(function(sum ,next ,ar){
console.log(sum);
  return sum+next;
});
console.log(cumulativesum);

//reduce arry from right by preserving previous result
console.log("************reduce right *******************");
var intarr=[3,5,6,7,3,6,2];
var cumulativesum=intarr.reduceRight(function(sum ,previous ,ar){
console.log(sum);
  return sum+previous;
});
console.log(cumulativesum);
//shift will remove one element from beginging  and create and empty elment in array
console.log("**************** shift ***************");
var element =intarr.shift();
console.log(element);
console.log(intarr);
//unshift will insert an element in beging of an arry and return element indexed element
console.log("********** unshift ********");
console.log("before unshift "+ intarr);
var ele=intarr.unshift(3);
console.log(ele);
console.log(intarr);
//slice will extract piece of element from array without modifying array
console.log("********** slice of arry*********************");
console.log("original array");
console.log(intarr);
var elements =intarr.slice (2,5); //here 5-2= 3 elements will be selected and index will count will start from 0 [2,5)
console.log(elements);
console.log(intarr); //here original array will not modified

//splice is extract element and modify original array
console.log("******************* splice the array *************************");

console.log(intarr);

var ss=intarr.splice (2,5,[8,9,10]);
console.log(ss);
