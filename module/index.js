// global module

console.log("adarsh gurjar")


// give an error fs is not defined
// when this line are weitten it may sence just iske niche wali islo import krna padta he
// importing fs
console.log(__dirname)
console.log(__filename)

const fs=require('fs');
fs.writeFileSync("hello text","code step by step") 
fs.writeFileSync("code.txt","adarsh gurjar")
