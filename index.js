// how to connect directry to any folder

const path=require('path');
const fs=require('fs');
const dirname = path.join(__dirname,'manyFiles')
// making files

// ************* ***********************   ******************* ***********

// for(i=0;i<5;i++){
//     fs.writeFileSync(dirname+`/adarsh.txt${i}`,"it is my first many files")
// }


//reading files

fs.readdir(dirname,(err,files)=>{
    files.forEach((element)=>{
         console.log(element);
    })
})