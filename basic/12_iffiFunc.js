// Immidiatly Invoked Function Expression (IFFE)
// Mostly global polution creates the problem so to save this problem we use IFFE
// and also IFFE function says imeeditaly execute the function

(function chai(){
    console.log("DBMS CONNECTED");
})();

( () => {
    console.log("DBMS CONNECTED TWO");
})();

( (name) => {
    console.log(`Welcome ${name}`)
})("Amna");
