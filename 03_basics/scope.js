// var c=50
let a=300//global scope

if(true){
    const a=30
    let b=40//block scope
    var c=50
}
console.log(a)//50 o/p bcz var eivabe change hoi
//this is why we nevwr use var
//+++++ interesting++
const addtwo=function(num){
    return num+2
}
addtwo(5)