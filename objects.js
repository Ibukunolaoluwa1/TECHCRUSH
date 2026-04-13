let obj ={
    name : "Esther",
    age : 25,
    profession : "Developer"
}

let student = {
    name: "Ngozi Adeyemi",
    age: 21,
    department: "Computer Science",
    isEnrolled: true
};
console.log(student.name)
console.log(student["age"])

let employee = {
    name: "Tunde Balogun",
    role: "Frontend Developer",
    salary: 45000,
    city: "Lagos"
};
let newName = employee.name
let newRole = employee.role
const {name, salary } = employee
console.log(name)
console.log(salary)

let courses = {
    CSC401 : "Data Structures",
    CSC402 : "Algorithms",
    CSC403 : "Operating Systems",
    CSC404 : "Database System"
}
let {CSC401 : CSC400} = courses
console.log(CSC400)

let profile = { name: "Ada", age: 22};

//Copy and add new properties
let updatedProfile =  {
    ...profile,
    city:"Abuja"
};

console.log(updatedProfile);

///const { nombre, ...rest} = {
  //  nombre: Emeka,
  //  age: 25,
 //   city: "Lagos"
//};

//console.log(nombre)
//console.log(rest)



const user ={
    name : "Florence",
    password : "12345",
    isFemale : true,
    city : "Ogbomoso",
    age : 23
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))



//for of
for (let key in user){
    console.log("these are the keys :" + key)
    console.log("these are the keys values :" + user[key])
}



