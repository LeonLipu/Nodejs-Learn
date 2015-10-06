//ascii from string
console.log("*************fromCharCode*************");
var st=String.fromCharCode(65);
console.log(st);

//string  from code
console.log("*************charCodeAt*************");
var int ="A".charCodeAt(0);
console.log(int);

//position of charactor and second parameter of indexOf is initial searched position
console.log("*************indexOf*************");
var in1 = "this is my javascript ".indexOf("a",6);
console.log(in1);

//charactor position in string
console.log("*************charAt*************");
var char="something".charAt(3);
console.log(char);

//match function takes input regular expression
//output is null if it is not matched and if matched it returns [matchedthing ,index ,input]
console.log("*************match*************");
var boo="something".match(/m../);
console.log(boo);

//searh is same as idexof only diferrence is it taking regular expression
console.log("************* search *************");
var boo="something".search(/me/);
console.log(boo);


//replace is taking callback(matched ,group ,index and input ) as arguments and regular expression
//it can be used as interpolication
var str="i am {name} and living in {town}";
console.log("*************replace *************");
var ob={name:"Lipu",town:"nalco"};
var result =str.replace(/\{(.*?)\}/g,function(matched,group,index,input ){
  return ob[group];
});
console.log(result);

//slice method start with 0 [start ,end)
console.log("************* slice  *************");
var str ="something".slice(2,5);
console.log(str );

//split by regular expression and it wil capture if you give () and second argument is length of array
var str="i am staying at nalco and hometown is jajput and which is not behind and which and may be later and thing is something ";
var arr=str.split(/and|is|be/,4);
console.log(arr);


//substr is 1st argument is index and 2nd argument number of character
console.log("************* substr   *************");
console.log("something".substr(2,4));


//substring is 1st argument is index and 2nd argument is also index
console.log("************* substring    *************");
console.log("something".substring(2,4));

console.log("************* upper and lower case and trim   *************");
console.log("SOMETHING ".toLowerCase());
console.log("something".toUpperCase());

console.log("  something  and  ".trim();
