
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
