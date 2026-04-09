function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("N");
    console.log("A");
}

// sayMyName();

function addition(num1, num2) {
    return num1 + num2
}

const result = addition(2, 4);
// console.log("Result is: ", result)

function loginUser(usernanme = "Amna"){
    if(!usernanme){
        console.log("Please enter a username")
        return
    }
    return `${usernanme} Just logged in`
}

// console.log(loginUser("GM"));

const user = {
    userName: "Amna",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`)
}

// handleObject(user);

const myNewarray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewarray));

function calculateCartPrice(... num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 400))

function syaHello() {
    console.log("Hello Babe")
}

syaHello();

function addition(a = 2, b = 6){
    console.log(`Addition of a and b is:, ${a + b}`)
}

addition();



