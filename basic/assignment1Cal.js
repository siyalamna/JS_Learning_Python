let a = 6;
let b = 10; 

if(a === 15){
    console.log(`a + b is: `, a + b)
} else {
    if(a === 12){
        console.log(`a - b is: `, a - b)
    } else {
        if(a === 2){
            console.log(`a * b is: `, a * b)
        } else {
            if(a === 5){
                console.log(`a / b is: `, a / b)
            } else {
                // console.log("Enter a number: ");
            }
        }
    }
}

function calCulator(a, oper, b) {
    if(oper === "+"){
        console.log(`a + b is: `, a + b)
    } else {
        if(oper == "-"){
            console.log(`a - b is: `, a - b)
        } else {
            if(oper === "*") {
                console.log(`a * b is: `, a * b)
            } else {
                if(oper === "/") {
                    console.log(`a / b is: `, a / b)
                } else {
                    console.log("Enter a Number to perform a Task:")
                }
            }
        }
    }
}

let cal = calCulator(5, "-", 3)
console.log(cal);