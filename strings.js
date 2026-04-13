//lengt of a string
let stringText = "This is a class on string methods"
console.log(stringText.length)

let capitalLetter = stringText.toUpperCase()
let smallLetter = stringText. toLowerCase()
console.log(capitalLetter)
console.log(smallLetter)

//trim
let str = "    Hello, World!    "
let trimmedStr = str.trim()
let frontTrimmedStr = str.trimStart()
let endTrimmedStr = str.trimEnd()
console.log(trimmedStr)
console.log(frontTrimmedStr)
console.log(endTrimmedStr)

let signupName = "  Florence"
let signinName = "Florence"

if((signupName.trim())=== signinName){
    console.log("Welcome back, Florence")
} else {
    console.log("Invalid login information")
}

//IndexOf and includes
let user_email = "olaflorence247@techcrush@gmail.com"
let email_index = user_email.indexOf("@")
console.log(email_index)