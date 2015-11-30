var re = new RegExp('[a-z]*');
var result = re.exec("something123");
console.log(result);

var re2 = new RegExp("[a-z]","gi"); //it will not work
console.log(re2.global);
var result2= re2.exec('something123 nothing');
console.log(result2);

var result3="something and something ".match(/something/g);//best way to match
console.log(result3);

var result4 =/something/g.test("something and something"); //test the application 
console.log(result4);
