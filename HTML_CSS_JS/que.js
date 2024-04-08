prompt = require("prompt-sync")();
let age = prompt("Enter Your age : ")
age = Number.parseInt(age)

const canDrive = (age) => {
    return age>18?true:false
}

if(canDrive(age)){
    alert("yes can drive")
}
else{
    alert("yes cannot drive")
}