const  girls = ["Amna", "Aqsa", "Asma", "Erha"];
const boys = ["Gm", "ALi", "Hassan", "Hammad"];

girls.push(boys);
console.log(girls);



let merge = girls.concat(boys);
// console.log(merge);

const all_newArray = [...boys, ...girls];
// console.log(all_newArray);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usable_anotherArray = another_array.flat(Infinity);
// console.log(usable_anotherArray);

// console.log(Array.isArray("Amna"));
// console.log(Array.from("Hitesh"));
// console.log((Array.from({name: "Amna"})));

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));




