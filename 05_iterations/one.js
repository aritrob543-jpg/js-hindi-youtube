const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i);
    
    
}
//for object iteration for in loop
//for map iteration for of loop
const coding=["python","java","cpp"]
coding.forEach( function(val){
    console.log(val)

})

const mycoding=[

    {
        language:"javascript",
        languagefile:js
    },
     {
        language:"java",
        languagefile:"j"
    },
     {
        language:"html",
        languagefile:"hs"
    }
]
mycoding.forEach( (item)=>{
    console.log(item.language)
})