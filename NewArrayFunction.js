console.log("------from------");
var name="Brahmananda"
var arr=Array.from(name);//generate array from arraylike function
console.log(arr);


console.log(Array.from({length:5},(x,i)=>i));
console.log(Array.from([2,4,5,1],(e,i,l)=>i));

console.log("___________isArray_____________");
console.log(Array.isArray([]));

console.log("___________concat_______________");
var ar1=[2,4,5,2,4,2,55,5,3]
var ar2=[55,5,3]
console.log(ar1.concat(ar2));

console.log("_______copyWithin_____________");

var carr=[0,1,2,3,4,5]
console.log(carr.copyWithin(3,4,5)); //target ---in which copy will happen  start -- and   end   --

console.log("___________entries______________");
var err=["lipu","sipu","para"]

var it = err.entries()
console.log(it.next().value);
// for (let a of it)
// {
//   console.log(e);
// }

console.log("________findIndex___________");  //In filter return element and it return index
var farr=[4,2,5,6,2]
var index=farr.findIndex(function(element,index,arr){

  return element>3;
})

console.log(index);


console.log("_______fill___________"); //---value --start --end

var farr=[2,4,5,7,2,3,4,2,11]
console.log(farr.fill(9,2,6));

console.log("____reverse_____");
console.log(farr.reverse());

console.log("_______arrow function _____");

var arr=["lipu","sipu","para"]

arr.forEach((element,index,arr)=>{

console.log(element);

})

var fun =()=>{return "string "}

console.log(fun());
