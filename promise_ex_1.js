/**
 * Created by brahmanandak on 8/28/2015.
 */

var q=require ("q");
var fs=require("fs");

//This is how error handling should be done
var func1=function (arg,callback){

    if(!arg)
    {
        callback("error msg");
        return ;
    }
    callback(null,"data msg "+arg);
};
console.log("********* For err ********");
func1(null,function (err,data){
    if(err)
    console.log(err);
    console.log(data);
});

console.log("*********For data ********");
func1("something",function (err,data){
    if(err)
     console.log(err);
    console.log(data);
});
console.log("*********By Promise then + data ********");
q.nfcall(func1,'something').then(function (data){
    console.log(data);
});
console.log("*********By Promise fail + data it will not execute********");
q.nfcall(func1,'something').fail(function (err){
    console.log(err);
});
console.log("*********By Promise fail + null ********");
q.nfcall(func1,null).fail(function (err){
    console.log(err);
});

q.nfcall(func1,"something else").fail(function (err){
    console.log(err);
}).then(function (data){
    console.log(data);
}).fin(function(){
    console.log("finally database should be close and it will execute at any cost");

}).done();