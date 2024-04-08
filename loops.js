prompt = require("prompt-sync")(); 
let sum = 0
let n = prompt("Enter the number ")
n = Number.parseInt(n)

for(let i = 0;i<n;i++){
    sum += i
}

console.log(sum)

let obj = {
    vishwajit: 21,
    abhijeet: 18
}

for(let a in obj){
    console.log("age of "+ a + " is " + obj[a])
}

for(let b of "21"){
    console.log(b)
}

let p = [1,3,5,7]
p.forEach((element) => {
    console.log(element*element)
})

let name = "vishwajit"
let arr = Array.from(name)
console.log(arr)
for(let i of p){
    console.log(i)
}
// for in function prints the key of elements in the array in array there are key value pairs where key is the index and value is the element at the particular index
for(j in p){
    console.log(j,p[j])
}