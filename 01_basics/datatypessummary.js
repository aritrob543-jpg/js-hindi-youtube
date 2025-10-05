//primitive
//7 types string,number,boolean,BigInt,null,undefined,symbol


//non primitive(reference) array,objects,function
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);//false symbol change if value is same
