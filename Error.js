
//error handiling 

try {
  throw new Error("error123");
} catch (e) {

  console.log(e.message); //e[Error:erro123]
  console.log(e.name);

console.log(e.filename);


} finally {
//do something always execute
}
/*
Error Object available :

Error()
EvalError()
InternalError()
RangeError()
ReferrenceError()
SyntaxError()
TypeError()
URIError()

*/
