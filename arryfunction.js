var arr=["some",'hello','world','may','not'];

//foreach for traversing
arr.forEach(function(ele,index,ar){
  console.log(ele);
});

//map for manupulating

var mrr=arr.map(function(ele,index,ar){
  return ele+"M";
});
console.log(mrr);

//filter for array based on condition
var frr=arr.filter(function(ele,index,ar){
  return ele.length>3;
});
console.log(frr);
