// const EventEmitter = require("events");
// const eventEmitter = new EventEmitter;

// // eventEmitter.on("tutorial", (num1, num2)=>{
// //     console.log(num1 + num2);
// // })

// //eventEmitter.emit('tutorial', 1,2)

// class Person extends EventEmitter{
//     constructor(name ){
//         super()
//         this._name = name;
//     }
//     get name(){
//         return this._name
//     }
// }

// let pedro = new Person("Pedro");

// pedro.on("name", ()=>{
//     //console.log("My name is" + pedro.name)
// })

// pedro.emit("name")

// // Readline module
// const readline = require("readline");
// const { ltr } = require("semver");
// const rl = readline.createInterface({input: process.stdin, output: process.stdout});

// let num1 = Math.floor((Math.random() *10) +1);
// let num2 = Math.floor(Math.random() * 10 + 1);

// const answer = num1 + num2;

// rl.question(`What is ${num1} + ${num2} ?  \n`, 
// (userInput)=>{
//  if (userInput.trim() == answer) {
//    rl.close();
//  } else {
//      rl.setPrompt('Response incorrect, pls try again');
//      rl.prompt();
//      rl.on('line', (userInput)=>{
//          if(userInput.trim() == answer)
//          rl.close();
//          else{
//             rl.setPrompt(`Your answer of ${userInput} is incorrect try again\n`)
//              rl.prompt();
//          }

//      })
//  }

// })

// rl.on("close", ()=>{
//     console.log("Correct !!!");
// } 
// )
 // LEARNING ABOUT THE FILE SYSTEM MODULE

const fs = require("fs");

//CREATING A FILE

// fs.writeFile('node.txt', "This is the official documentation for node", (error)=>{
//    if(error) console.log(error)
//    else{
//        console.log("fille successfully created");
//        fs.readFile('node.txt','utf8', (err, file)=>{
//         if(err)
//         console.log(err)
//         else
//         console.log(file)
//        })
//    }
// })

//RENAMING AA FILE
// fs.rename('node.txt', 'example.txt', (err)=>{
//    if(err)
//    console.log(err)
// else
// console.log("file successfully renamed")
// })

//APPENDING DATA TO A FILE
// fs.appendFile('example.txt', ' This is a new append text', (err)=>{
//     if(err)
//     console.log(err)
//     else
//     console.log("file has been appended")
// })

//DELETING A FILE
fs.unlink('example.txt', (err)=>{
    if(err)
    console.log(err)
    else
    console.log("File succcessfuly deleted");
})



