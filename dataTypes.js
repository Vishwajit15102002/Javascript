let a = null; // null
let b = 34; // number
let c = true; // boolean
let d = BigInt("345") // bigint
let e = "hello" // string
let f = Symbol("!") // symbol
let g = undefined // undefined

console.log(a,b,c,d,e,f,g)
console.log(typeof d)

const item = {
 "Vishwajit":true,
 24:false,
 21:true
}
item['friend'] = "aman"

console.log(item[21])
console.log(item[27]) // not present in items gives undefined
console.log(item)