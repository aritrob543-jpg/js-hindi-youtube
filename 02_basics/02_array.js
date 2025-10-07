const marvel_heroes=["Ironman","Thor"]
const dc_heroes=["Batman","Flash"]
const new_hero=[...marvel_heroes,...dc_heroes]
console.log(new_hero);
const anotherArray=[1,2,3,[4,5,6],[7,8,[9,10]]]
const real_another_array=anotherArray.flat(Infinity)//it converts another array into a single array
console.log(real_another_array);
console.log(Array.isArray("Aritro"))
console.log(Array.from("Aritro"));
console.log(Array.from({name:"Aritro"}));//interesting it gives empty string
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))


