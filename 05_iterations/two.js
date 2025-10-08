// const myNums=[1,2,3,4,5,6,7,8,9]

// // const newNums=myNums.filter((num)=>num>4)
// // console.log(newNums)//we will use filter a lot for project
// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const mynumbers=[1,2,3,4,5,6,7]
// const newNumbers=mynumbers.map((nums)=>nums+5)
// console.log(newNumbers);
const newNum=mynumbers
             .map((num)=>num*10)
             .map((num)=>num+1)
             .filter((num)=>num>40) 
             console.log(newNum);//filter true false check kre map sob kre
             

