//syntax error
//let add = (5 + 3
//console.log(add)

//reference error
//let myame = "Amina"
//console.log(myName)

//type error
//let age = 25
//console.log(age.toString().toUpperCase)

try{
// code that might fail goes here
let result = 10/0;
console.log(result);
undefinedFunction(); //this will cause an error!
console.log("This will NOT run.;")
}catch(error) {
// This runs ONLY if something goes wrong
console.log("An error occurred: " + error.name , error.message)
}
console.log("The program continues here.")

try{
let age = 25
console.log(age.length())
}catch(error) {
    console.log("An error occurred: " + error.message)
}

function loadUserData(userId) {
    console.log("Starting to load data...");
    try {
        if (!userId.startsWith("BAD")) {
            throw new Error("User Id must start with BAD");
        }
        console.log("Data loaded for user: " + userId);
    } catch (error) {
      console.log("Failed: " + error.message);  
    } finally {
        console.log("Loading complete. Closing connection."); // ALWAYS runs
    }
}

loadUserData("BAD-1234");
//loadUserData(-1);