function one() {
    const username = "Amna"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();

if(true) {
    const userName = "GM"
    if(userName === "GM"){
        const website = " Youtube"
        console.log(userName + website)
    }
    // console.log(website)
}
// console.log(userName);


// +++++++++++ Interesting +++++++++++++++
console.log(addOne(5));

function addOne(num1) {
    return num1 + 1
} 

// console.log(addTwo(5));
const addTwo = function(num1) { //Hoisting, this is declare in variable
    return num1 + 2
}

console.log(addTwo(5));


