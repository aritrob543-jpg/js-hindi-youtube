//object literals
const mySem=Symbol("key1")
const jsuser={
    name:"Aritro",
    "full name":"aritro biswas",
    [mySem]: "mykey1",
    age: 18,
    location:"aranghata",
    email:"aritro@123",
    isloggedin:false
}
console.log(jsuser.email);
console.log(jsuser["email"]);//this is also a method to access
console.log(jsuser["full name"]);//this is the only way to access for this case
console.log(jsuser[mySem]);
jsuser.email="aritro234"
// Object.freeze(jsuser)
jsuser.email="aritro536"
console.log(jsuser.email);
jsuser.greeting=function(){
    console.log("hello world");
    
}
console.log(jsuser.greeting());
jsuser.greetingTwo=function(){
    console.log(`hello my friend ${this.name}`)
}
console.log(jsuser.greetingTwo())











