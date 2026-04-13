//slice and substring
let testString = "My name is Florence"
let slicedString = testString.slice(-5)
let substringString = testString.substring(-5)
console.log(slicedString)
console.log(substringString)

//replace and replaceall
const text ="Florence is a techie, Florence loves coding and Florence loves teaching"
let replacedText = text.replace("Florence", "She")
let replacedAllText = text.replaceAll("Florence", "She")
console.log(replacedText)
console.log(replacedAllText)

//Split
const sentence = "LNGUAGES: Javascript, Python, Java, C++"
let splitSentence = sentence.split(",") // Return data type = Array
console.log(splitSentence)
let example = "She is a teacher, she is a girl, she is eating"
console.log(example.split("she"))