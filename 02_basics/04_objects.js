const tinderuser=new Object()//singleton object
//const tinderuser={}//non singleton object
//both give same empty object
tinderuser.id="12345"
tinderuser.name="aritro"
console.log(tinderuser);
const regularuser={
     fullname:{
        firstname:{
            username:"aritro",
            title:"biswas"
        }

    }
}
console.log(regularuser.fullname.firstname);
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3=Object.assign({},obj1,obj2)
///this is the process of object merging
const obj3={...obj1,...obj2}
console.log(obj3)




const course={
    coursename:"js-hindi-utube",
    price:999,
    courseconstractor:"hitesh"

}
const{courseconstractor}=course
console.log(courseconstractor);//this is how we can access//destructuring





