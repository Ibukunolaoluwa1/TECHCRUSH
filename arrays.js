let item1 = "milk"
let item2 = "milo"
let item3 = "rice"

let items = ["milk" , "milo" , "rice" , 1 , 2 , 3 , true]
let names = [" Esther" , " John" , " Doe" , " Jane" , " Smith"]

names.forEach(function(name){
    console.log("TECH_CRUSH_2026_COHORT_6" + name)
})
console.log(items[0])
console.log(items.length)

//forEach
let fruits = [" apple" , " banana" , " orange" , " grape" , " mango" ]
fruits.forEach(function(fruit){
    console.log("i eat"   +   fruit)
})

//map methods
let scores = [90, 80, 70, 60, 50]
let newScores = scores.map(x => {
    //console.log("as a good teacher, I decided to add 5 marks to all my students")
    return x + 5
})
console.log(newScores)

let students = [" Esther" , " John" , " Doe" , " Jane" , "Smith"]

let nameTag = students.map(function(tag){
    return "TECH_CRUSH_2026_6" + tag
})
console.log(nameTag)

//filter method
let jambScores = [200 , 250 , 300 , 150 , 180 , 280 , 290 , 100]

let passed = jambScores.filter((score)=>{
    return score >= 200
})
console.log(passed)

let ages = [18, 25, 30, 15, 20, 35, 40]

let adults = ages.filter(function(age){
    return age >= 18
})
console.log(adults)

//find
const studentNames =  ["John", "Ada", "Doe", "Jane", "Smith", "john", "Bola"]
const found = studentNames.find((name)=>{
    return name === "john"
})
console.log(found)

//reduce
let cartPrices = [1500, 800, 2200, 450, 1000];

let total = cartPrices.reduce(function(acc, currentPrice){
return acc + currentPrice;
}, 0) //accumulator, current value, initial value
console.log(total);

let grandTotal = cartPrices.reduce((acc, price)=>{
    return acc + price;
}, 0)
console.log(grandTotal)


//push, pop, shift, unshift
let colors = ["red", "blue", "green"]
colors.push("yellow")
console.log(colors)


let lastColor = colors.pop();
console.log(colors)
console.log(lastColor)

let firstColor = colors.shift();
console.log(colors)
console.log(firstColor)

let newLength = colors.unshift("purple")
console.log(colors)
console.log(newLength)