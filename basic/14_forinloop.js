const myObject = {
    js: 'javaScript',
    rb: 'ruby',
    cpp: 'C++',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} is Shortcut for ${myObject[key]}`);
}

const programming = ['java', 'js', 'php', 'cpp', 'python']
for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map()
// map.set('In', 'India')
// map.set('USA', 'United State of America')
// map.set('FR', 'France')

// for (const key in map) {
//     console.log(key);
// }