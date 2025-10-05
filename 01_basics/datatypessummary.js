//primitive
//7 types string,number,boolean,BigInt,null,undefined,symbol


//non primitive(reference) array,objects,function
const id=Symbol('123')
const anotherId=Symbol('123')
//console.log(id===anotherId);//false symbol change if value is same
let myyoutubechannel="hiteshchoudhery.com"
let anothername=myyoutubechannel
console.log(anothername)
anothername="chaiaurcode"
console.log(myyoutubechannel)
console.log(anothername)
let userOne={
    email:"user@gmail.com",
    upi:"aritro"
}
let user2=userOne
user2.email="aritro@123"
console.log(userOne.email)
console.log(user2.email)





