let marks = [96,97,90,94]
console.log(marks)
console.log(marks[0])
console.log(marks[2])
marks[4] = 99 // adding
marks[1] = 95 // changing
console.log(marks)
console.log(marks.length)
console.log(typeof marks)

// methods in array

// toString  method
let n =[1,2,3,4]
let m = n.toString()
console.log(typeof m)
console.log(typeof n)
console.log(m)

// join method joins all the array elements using a seprater
let p = n.join("_")
console.log(p)

// pops removes the last element from the array 
let q = n.pop()
console.log(q,n)
n.push(4)
console.log(n)

// shift removes the first element from the array
console.log(n.shift(),n)
console.log(n.unshift(1),n)
delete n[0]
console.log(n) // delete is not method it delete the value but the size of array remains same

let a = [14,6,7,9,8]
let b = n.concat(a)
console.log(b)
console.log(b.sort())
let compare = (a,b) =>{
    return a-b               // ascending
}
console.log(b.sort(compare))
let diff = (p,q) =>{
    return q-p       // descending
}
console.log(b.sort(diff))

console.log(n.reverse())
let c = [5,6,7,8]
c.splice(1,2,10,11)
console.log(c)
let d = c.slice(1,3)
console.log(d)