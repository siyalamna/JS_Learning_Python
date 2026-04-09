// Singleton
// Object.create

// Object literals
const mySym = Symbol("Key1")

const jsUser = {
    name: "Amna",
    "full Name": "Amna Siyal",
    [mySym]: "key1",
    age: 21,
    location: "Hyderabad",
    email: "siyalamna@gmail.com",
    isLoggin: false,
    loggedIn: ["Monday", "Tuesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser.fullName);
// console.log(typeof jsUser[mySym]);

jsUser.email = "siyalgm55@gmail.com";
// Object.freeze(jsUser)
jsUser.email = "Hitesh@gmail.com"

// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());





