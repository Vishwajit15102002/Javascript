
//map
let arr = [1,2,3]
let a = arr.map((element, index,array)=>{
    console.log(element,index,array)
    return element +index
})
console.log(a)

// filter
let b = [2,4,5,6,7,8,9]
let c = b.filter((value)=>{
    return value%2 == 0
})
console.log(c)

// reduce
let d = arr.reduce((p,q) =>{
    return p+q
})
console.log(d)