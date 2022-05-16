// data types : numbers, strings, booleans
function add(n1, n2, showResult) {
    // this method has downside - we can prevent this error with ts
    // js - dynamically typed - they can change during runtime
    // ts - statically typed - set during development
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //    throw new Error('Incorrect input!')
    // }
    // truthy or falsy value
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
// 5 is a string and js concatenates two values
// output 52.4 - logical error 
// it hard to catch these errors 
var number1 = 5;
var number2 = 2.4;
var printResult = true;
// store numbers as arguments 
add(number1, number2, printResult);
