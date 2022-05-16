// data types : numbers, strings, booleans
// the compiler and IDEs understand TS
// colon : the name of the type - as parameters of the function 
function add(n1: number , n2: number, showResult: boolean, phrase: string) {
    // this method has downside - we can prevent this error with ts
    // js - dynamically typed - they can change during runtime
    // ts - statically typed - set during development
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //    throw new Error('Incorrect input!')
    // }
    

    const result = n1 + n2
    // truthy or falsy value
    if (showResult) {
      console.log(phrase + result)
    } else {
        return result
    }
}

// 5 is a string and js concatenates two values
// output 52.4 - logical error 
// it hard to catch these errors 
const number1 = 5
const number2 = 2.4
const printResult = true
const resultPhrase = 'Result is: '

// store numbers as arguments 
add(number1, number2, printResult, resultPhrase)


