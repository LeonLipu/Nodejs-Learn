/**
 * Created by brahmanandak on 8/28/2015.
 */
var q=require ("q");
var fs=require("fs"),
    request=require("request");
//by using call back
fs.readFile("README.md",'utf8',function (err,data){
    if(err)
    throw err;
    console.log("file  read "+data);
});
console.log("this after file ");

// By using promise ,nfcall is make fs.readfile to return promise ,fail (reason) and then( data)
q.nfcall(fs.readFile,"README.md").then(function (data){
    console.log(" it is from promise :"+data);
}).fail (function(err){
    console.log("error received "+err);

}).done();

var fun1=function(){
    console.log("fun1 is called");
    return "ret1"
}

var fun2=function(){
    console.log("fun2 is called");
    return "ret2"
}


var fun3=function(arg1,arg2){
    console.log("fun3 is called " +arg1+" and "+ arg2);

}

//it will execute methods and keep its return value and make avail to spread method it is used when we have data dependecy is there
var promise = q.all([q.fcall(fun1), q.fcall(fun2)]);
promise.spread(fun3);
//***************************************
