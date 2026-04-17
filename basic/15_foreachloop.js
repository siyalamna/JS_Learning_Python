const coding = ['js', 'cpp', 'php', 'java', 'html', 'css']
coding.forEach( function (val) {
    // console.log(val);  
})

coding.forEach( (item) => {
    // console.log(item);
})

let names = ['Amna', 'Aqsa', 'Asma', 'Gm', 'Siyal']

// function printMe(item) {
//     console.log(item);
// }
// name.forEach(printMe)
names.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFilename: 'js'
    },
    {
        languageName: "Structured Query Language",
        languageFilename: "SQL"
    },
    {
        languageName: "Python",
        languageFilename: "Py"
    }
]
myCoding.forEach( (values) => {
    console.log(values.languageName);
})