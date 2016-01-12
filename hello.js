//speical tricks

+function (){
  var a=b=6;
}();

console.log(typeof(a)); //why undefied  becoz var a=b=5 is equal to b=0 var a=b and b become global variable to display outside
console.log(typeof(b));
