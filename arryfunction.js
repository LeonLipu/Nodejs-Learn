var arr=["some",'hello','world','may','not'];
console.log("************ forEach  *******************");
//foreach for traversing
arr.forEach(function(ele,index,ar){
  console.log(ele);
});
console.log("************ map  *******************");
//map for manupulating
var mrr=arr.map(function(ele,index,ar){
  return ele+"M";
});
console.log(mrr);
console.log("************ filter  *******************");

//filter for array based on condition
var frr=arr.filter(function(ele,index,ar){
  return ele.length>3;
});
console.log(frr);
console.log("************ some  *******************");
//some is OR operation which applied to every element of array
var boo=arr.some(function(ele,index,ar){
  return ele.length>4;
});
console.log(boo);
console.log("************ every *******************");

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
//splice is extract element and modify original array with index to number of element and left over element present in original array
console.log("******************* splice the array *************************");
console.log(intarr);
var elements =intarr.splice (2,5,8,9,10,6);//1st argumet is index and 2nd argument is number of element and other are element to inserted element to original array
console.log(elements);
console.log(intarr);
console.log("************ reverse   *******************");
console.log("original arry");
//it modifies original array
console.log(intarr);
var rearr=intarr.reverse();
console.log(rearr);
console.log(intarr);
console.log("******************* sort ***********");
//it modifies original array
//this sorting is not
var sarr=["hello","something","world","brahmananda","brahmanda","hellw"]
var soarr=sarr.sort()
console.log(soarr);
console.log(intarr);

//for integer array
var iarr=[ 6, 10,33, 9, 8, 5, 3 ];
var irarr=[ 6, 10,33, 9, 8, 5, 3 ];

console.log(irarr.sort());
//with call back and for desending b-a
console.log(iarr.sort(function(a,b){
  return a-b;
}));

//object sort in desecing order

var obarr=[{name:"lipu",no:1},{name :"sipu",no:2},{name:"para",no:0}];


obarr.sort(function (ob1,ob2){

if(ob1.no>ob2.no){
  return -1;//
}

if(ob1.no<ob2.no){
  return 1;
}

if(ob1.no==ob2.no){
  return 0;
}

});
console.log(obarr);


console.log("*********push **************");
//inserted at end
intarr.push (99);
console.log(intarr);
console.log("********* pop **************");
//deleted at the end
intarr.pop();
console.log(intarr);

//concatenation of string
console.log(intarr.toString());//concatenated by ,(comma)
console.log(intarr.join("|"));//concatenated by delimeter given by bracket
