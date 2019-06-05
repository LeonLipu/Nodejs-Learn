
+function (){
Array.prototype.indexOfObject=function(object){
for(var i=0;i<this.length;i++){
  if(this[i][Object.keys(object)[0]]==object[Object.keys(object)[0]])
   return i;
  }

}


Array.prototype.indexOfLastObject=function(property,value){
for(var i=this.length-1;i>=0;i--){
  if(this[i][property]==value)
   return i;
  }
}


}




