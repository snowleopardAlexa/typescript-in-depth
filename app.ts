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

