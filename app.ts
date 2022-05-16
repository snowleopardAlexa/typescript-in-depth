// union types
// we can't combine both numbers and strings with + - union types can help with that
function combine(input1: number | string, input2: number | string)  {
    const result = input1 + input2 
    return result
}

const combinedAges = combine(40, 30)
console.log(combinedAges)

const combinedNames = combine('Max', 'Anna')