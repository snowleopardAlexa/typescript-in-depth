// data types : numbers, strings, booleans

function add(n1: number , n2: number) {
    return n1 + n2
}

// 5 is a string and js concatenates two values
// output 52.4 - logical error 
// it hard to catch these errors 
const number1 = 5
const number2 = 2.4

// store numbers as arguments 
const result = add(number1, number2)
console.log(result)

