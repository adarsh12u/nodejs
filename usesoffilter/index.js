// using filter method in node js interwier question
// it is use to find the specific value from an array
// it is also a very askful question frim the interwier 
//   ye array ke upper hi chalega
// filter apne aap se 1 loop bhi laga deta he 

const array=[1,2,3,4,5,6,7,8,9,9];

// array.filter((item)=>{
//      console.log(item)    
// })


// using filter  ****************************

let result= array.filter((item)=>{
    return item===3
})
console.log(result)
console.log(array)

// using reduce  **************************


// let result= array.reduce((item)=>{
//     return item===3
// })
// console.log(result)
// console.log(array)


// using map *******************************

// let result= array.map((item)=>{
//     return item===3
// })
// console.log(result)
// console.log(array)
