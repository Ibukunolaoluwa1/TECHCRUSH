let str = "Coding is fun"
// Extract the word "coding"
let word = str.slice(0, 6)
console.log(word)
let fun = str.substring(10, 13)
console.log(fun)
let title = str.slice(7, 9)
console.log(title)



//challenge 2
const colors = "red, green, blue, yellow"
const comma = colors.split(",")
console.log(comma)
const joined = comma.join("-")
console.log(joined)

//challenge 3
const url = "/api/vl/users";
const slash = url.split("/")
const vlIndex = slash
console.log(slash[2])
console.log(slash)
console.log(vlIndex)

//challenge 4: extract only "esther"
const matricNumber = "TECHCRUSH-ESTHER-2026"
const splitMatric = matricNumber.split("-")
console.log(splitMatric[1])
