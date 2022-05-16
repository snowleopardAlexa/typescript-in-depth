// data types : numbers, strings, booleans
function add(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input!');
    }
    return n1 + n2;
}
// 5 is a string and js concatenates two values
// output 52.4 - logical error 
// it hard to catch these errors 
var number1 = '5';
var number2 = 2.4;
// store numbers as arguments 
var result = add(number1, number2);
console.log(result);
