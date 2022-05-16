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

// callback function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2
    cb(result)
}

// let someValue: undefined 
addAndHandle(10, 20, (result) => {

})

printResult(add(5, 12))

// function types - which type of function we want to use
let combineValues: (a: number, b: number) => number

combineValues = add 
// combineValues = printResult

// it throws error combineValues is not a function
// combineValues =  5

console.log(combineValues(8,8))

addAndHandle(10, 20, (result) => {
    console.log(result)
})