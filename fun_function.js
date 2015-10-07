

//function as anonimous function

var fun =function (){
  console.log("i am anonimou function ");
};

fun();


//named function
function nfun(){
  console.log("i am named function");
};
nfun();

//function as class
function cls(model){

  this.model=model;
  this.getmodel=function(){
    console.log(this.model);
  };

};

//creating object out of that class
var ob=new cls ("france");
ob.getmodel();

var objs={model:"indian"};
//use  this object to any function
//here <this> is replace by objec
ob.getmodel.call(objs);


//use this function to object and it will execute
ob.getmodel.apply(objs);


//use this function to this object
//here unlike call and apply ,bind will return function and this will be replaceed by object

var newfun=ob.getmodel.bind(objs);
newfun();
