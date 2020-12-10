const sum = (num1, num2) => num1 + num2;

const PI = 3.124;

class SomeMathObj {
    constructor(){
        console.log("OBJECT created")
    }

}

module.exports={
    sum: sum,
    SomeMathObj: SomeMathObj,
    PI: PI
} 

