
var q = require('q');

function abc() {
  var ob;
  var ss=q.defer();

  setTimeout(function() {


    ob = 8;
    ss.resolve(ob);

  }, 20);

  return ss.promise;
}



var ss=abc();




ss.then(function(data){
  console.log("malleswar");
  console.log(data);
 });
