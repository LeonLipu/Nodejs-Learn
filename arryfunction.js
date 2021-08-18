var arr=["some",'hello','world','may','not'];

//get key 

for (let num in arr) {console.log(num);}

//get value 

for (let num of arr){console.log(num);};


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


//**********************New functionality added ********************

console.log("**********new functionality added *****************");

var name = "Brahmananda kar "

console.log("****** from *********");

console.log(Array.from(name));
// Array.of == it constructor to create array 

var kk= Array.of(2,3,4,234,3)

console.log(kk)



// New method added 

var a1=['a','b','c']
var a2=['d','e','f']
console.log(a1.concat(a2))

// 1. copywithin   target (where it will paste), start(first index) ,end(up to index ) -- copy part of array to itself 

var a1=['a','b','c','d','e']

console.log(a1.copyWithin(0,2,4))

// Entry like in java hashmap 

var a1=['a','b','c','d','e']
var it=a1.entries()
console.log(it.next().value)

// Values like java hashmap

var a1=['a','b','c','d','e']
var it=a1.values()

for( let v of it ){
  console.log(v)
}



// Fill (value ,start , end )
var a1=['a','b','c','d','e']
a1.fill(0,1,4)
console.log(a1)

// find ==input is callback, it is like filter but only return first value and one value 

var a1=['a','b','c','d','e']
console.log(a1.find(e=> e>'c'))

// findIndex ==input is callback, it is like filter but only return first ndex and one index

var a1=['a','b','c','d','e']
console.log(a1.findIndex(e=> e>'c'))


// indexof (element )==return first index
var a1=['a','b','c','d','e']
console.log(a1.indexOf('d'))

// include (element )==return boolean value 

var a1=['a','b','c','d','e']
console.log(a1.includes('d'))


// flat (depth -- remove level subarry ex 1 means 1 level , default is all )- it will remove all sub array and  elements will added to parent element 

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat())


// flatmap == it is like only map but if map return array it will return element that is applicable to 1 level of array 
// it helpfull if you want add more element to exisiting array with some condition 

const arr=[2,3,5,2,3]

var kk= arr.flatMap(e=> {

  if(e==5)
  return [e,e+1]
  else 
  return [e]

})

console.log(kk)











