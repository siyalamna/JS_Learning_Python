// Singleto Object
// const tinderUser = new Object()

const tinderUser = {}
tinderUser.name = "Amna"
tinderUser.id = "101"
tinderUser.loggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userName: {
            fullName: "Amna",
            lastName: "Siyal"
        }
    }
}
// console.log(regularUser.fullName.userName.fullName);
// console.log(regularUser.fullName?.userName.fullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const user = [
    {
        id: 1,
        email: "siyalamma86@gmail.com"
    },
    {
        id: 2,
        email: "siyalaqsa86@gmail.com"
    },
    {
        id: 3,
        email: "siyalaqsaa86@gmail.com"
    },
    {
        id: 4,
        email: "siyalahaa86@gmail.com"
    }
]
user[1].email
console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('loggedIn'));
console.log(tinderUser.hasOwnProperty('logged'));




