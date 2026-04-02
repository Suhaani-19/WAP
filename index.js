const fs = require("fs")

// *writing file sync*

console.log("Hi")
const data=fs.writeFileSync("note.txt","Hello,I'm learning FS")
console.log(data)
console.log("123")

// *reading file sync*
const result = fs.readFileSync("note.txt","utf-8")
console.log(result , typeof result)   
fs.writeFileSync("note.txt","Hello,I'm learning FS")
fs.appendFileSync("note.txt"," \nHello,I'm learning ")


fs.writeFileSync("note123.txt"," \nHello,I'm learning FS",{flag:"a"}) // first write this only and run



// fs.unlinkSync("note123.txt") //then write this