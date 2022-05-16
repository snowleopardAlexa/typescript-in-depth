function add(n1: number, n2: number) {
    return n1 + n2
}

// void - does not return anything, it does not have return statement
// the void return type
// undefined is a valid type in typescript
// void is a valid type in typescript
function printResult(num: number): void {
    console.log('Result: ' + num)
}

printResult(add(5, 12))

let combineValues

combineValues = add 

console.log(combineValues(8,8))

