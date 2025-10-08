const user={
    username:"aritro",
    price:500,
    welcomeMessage:function(){
        console.log(`${this.username}welcome to the website`)//here this refers to user
        console.log(this)
    }
}
user.welcomeMessage()
console.log(this)//this gives empty string as nothing is here

const chai=  ()=>{//this is arrow function
   let username="aritro"
   console.log(this)



}
chai()//this gives empty string

const addtwo=(num1,num2)=>num1+num2//we can do entire things using arrow function within one line
console.log(addtwo(3,5))//this is also called as implicit return 