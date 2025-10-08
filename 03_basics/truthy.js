//falsy values
//false,0,-0,BigInt 0n,undefined,null,Nan,""

//truthy values
//"0",'false'," ",[],{},function(){}
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
    
}
//nullish coalescing operator (??):null,undefined
let val1;
val1=5??10
console.log(val1)
val1=null??10//it checks safety of pragramming
console.log(val1)
//ternary operator
//condition?true:false