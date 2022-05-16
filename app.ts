// unknown types
// unknown is different to any
// it is better choice than any 
let userInput: unknown
let userName: string


userInput = 5
userInput = 'Kion'
if (typeof userInput === 'string') {
    userName = userInput
}

// never type 
// this function always crashes the script because it throws error
// add never because it tells devs that the function is intended to return nothing
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code }
}

const result = generateError('An error occurred!', 500)
console.log(result)