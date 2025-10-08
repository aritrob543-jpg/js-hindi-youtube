function addition(number1,number2){
    //number1 and number 2 is parameter
    console.log(number1+number2);
    

}
addition(5,6)//here 5 and 6 is argument
function calculatePrice(...num1){//this is rest operator it add a lot of o/p together
    return num1

}
console.log(calculatePrice(200,400,600))
const user={
    username:"Aritro",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
