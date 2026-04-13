//Trim
let str = "   Hello, WORLD!  "
let TrimmedStr = str.trim()
let frontTrimmedStr = str.trimStart()
let endTrimmedStr = str.trimEnd()
console.log(TrimmedStr)
console.log (frontTrimmedStr)
console.log (endTrimmedStr)

//Capital ang lower case
let capitalLetter = str.toUpperCase()
let smallLetter = str.toLowerCase()
console.log(capitalLetter)
console.log(smallLetter)

//finding position
const worldPosition = str.indexOf("WORLD")
console.log(worldPosition)

//Replacing World with Nigeria
console.log(str.replace("WORLD", "Nigeria"))
console.log(str.replaceAll("L", 1))

//Finding characters of 3 to 8
let sliced = str.slice(3, 8)
console.log(sliced)