// for of loop
// ["", "", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(`Array is: ${arr}`);
    console.log(num);
}

// for of
// ["", "", "", ""]
// [{}, {}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    // console.log(arr);
}

const greetings = "Hello World";
for (const greet of greetings) {
    // if(greet == " "){
    //     break
    //     continue
    // }
    // console.log(greet);
}

// Maps => holds key-value pair, remembers the original insertion 
// order of the keys object does not
// Known for unique values
const map = new Map()
map.set('In', 'India')
map.set('USA', 'United State of America')
map.set('FR', 'France')
// map.set('In', 'India') => duplicate value

// console.log(map);
for (const [key, value] of map) {
    // console.log(key + ":-" + value);
}

const myObject = {
    game1: 'Cricket',
    game2: 'badmenton'
}
// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// }