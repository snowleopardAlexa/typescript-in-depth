// union types
// we can't combine both numbers and strings with + - union types can help with that
function add(input1: number | string, input2: number | string)  {
    let result
    if (typeof input1 === 'number'  && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combinedAges = add(40, 30)
console.log(combinedAges)

const combinedNames = add('Max', 'Anna')
console.log(combinedNames)