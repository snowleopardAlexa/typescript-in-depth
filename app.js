function add(n1, n2) {
    return n1 + n2;
}
// void - does not return anything, it does not have return statement
// the void return type
// undefined is a valid type in typescript
// void is a valid type in typescript
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
combineValues = printResult;
// it throws error combineValues is not a function
// combineValues =  5
console.log(combineValues(8, 8));
