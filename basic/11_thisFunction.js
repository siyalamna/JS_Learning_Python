const user = {
    userName: "Amna",
    price: 999,

    welcomeMsg: function() {
        console.log(`${this.userName}, Welcome to Website`);
        console.log(this);
    }
}

// user.welcomeMsg();
// user.userName = "Gm"
// user.welcomeMsg();

// console.log(this);  //in browsers the global objectis window object

function chai() {
    let userName = "Amna"
    console.log(this.userName);
}
// chai()

const chaii = function () {
    let userName = "Amna"
    console.log(this.userName);
}
// chai()

const chais = () => {
    let userName = "Amna"
    console.log(this.userName);
}
// chai()

const hello = (val) => "Hello " + val;

// console.log(hello())

const person = {
  name: "John",
  greet: function() {
    return this.name;
  }
};

const addTwo = (num1, num2) => {  // if you're using return keyword this is called 
    return num1 + num2            // explicit function add adding curly bracket{} too.
}

// console.log(addTwo(3, 4));


// Impliciti return
const subTwo = (num1, num2) => (num1 - num2)   //if you're using parathesis() there
// console.log(subTwo(0, 6));                // is no need to add curly brackets{}
 
// if you're using single line in function to print the object you have to rape
//  the object in paranthesis for suppose:

const user1 = () => ({username: "Amna"})  
console.log(user1());
