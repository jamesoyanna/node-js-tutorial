const EventEmitter = require("events");
const eventEmitter = new EventEmitter;

// eventEmitter.on("tutorial", (num1, num2)=>{
//     console.log(num1 + num2);
// })

//eventEmitter.emit('tutorial', 1,2)

class Person extends EventEmitter{
    constructor(name ){
        super()
        this._name = name;
    }
    get name(){
        return this._name
    }
}

let pedro = new Person("Pedro");

pedro.on("name", ()=>{
    //console.log("My name is" + pedro.name)
})

pedro.emit("name")

// Readline module
const readline = require("readline");
const { ltr } = require("semver");
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

let num1 = Math.floor((Math.random() *10) +1);
let num2 = Math.floor(Math.random() * 10 + 1);

const answer = num1 + num2;

rl.question(`What is ${num1} + ${num2} ?  \n`, 
(userInput)=>{
 if (userInput.trim() == answer) {
   rl.close();
 } else {
     rl.setPrompt('Response incorrect, pls try again');
     rl.prompt();
     rl.on('line', (userInput)=>{
         if(userInput.trim() == answer)
         rl.close();
         else{
             rl.setPrompt(`Your answer of ${userInput} is incorrect try again\n`)
             rl.prompt();
         }

     })
 }

})

rl.on("close", ()=>{
    console.log("Correct !!!");

} 
)
