const myNums=[1,2,3]
const myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc is${acc}and currval is${currval}`)
    return acc+currval

},0)
console.log(myTotal)
