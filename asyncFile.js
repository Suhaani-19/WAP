const fs= require("fs")
console.log("Start")
fs.readFile("note.txt","utf-8",(error,data)=>{console.log("File read",data)}
)

fs.writeFile("note123.txt","Writingggg",()=>{console.log("File write")})
console.log("End")


