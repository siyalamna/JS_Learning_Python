const coding = ['java', 'html', 'css', 'cpp', 'python']
let values = coding.forEach( (item) => {
    // console.log(item);
    // return item (forEach loop doesn't return any value
})
// console.log(values);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNum.filter( (num) => num > 4)
// const newNums = myNum.filter( (num) => {
//     num > 4
// })
// console.log(newNums);

const newNums = []
myNum.forEach( (num) => {
    if(num > 4) {
        newNums.push(num)
    }
})
// console.log(newNums);

const books = [
    { title: 'Book one', genre: 'fiction', publish: 1981, edition: 2004 },
    { title: 'Book two', genre: 'No fiction', publish: 1992, edition: 2008 },
    { title: 'Book three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book four', genre: 'non-fiction', publish: 1989, edition: 2010 },
    { title: 'Book five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book six', genre: 'fiction', publish: 1987, edition: 2010 },
    { title: 'Book seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book eight', genre: 'science', publish: 2011, edition: 2016 },
    { title: 'Book nine', genre: 'Non-fiction', publish: 1981, edition: 1989 },
];

// let userBooks = books.filter( (bk) => bk.genre === 'History')

// userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === 'History')

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
})
console.log(userBooks);

