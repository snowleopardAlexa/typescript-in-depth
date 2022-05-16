// const person: {
//    name: string
//    age: number 
// } = {
const person: {
    name: string
    age: number
    hobbies: string[]
    role: [number, string] // tuple type
} = {    
    name: 'Kion',
    age: 1,
    hobbies: ['Eating Meat', 'Attacking Moma feet'],
    // this is tuple and it must only have two elements - tuple is an array with fixed element length
    role: [2, 'king']
}

person.role.push('prince')
person.role[1] = 10

// any type - it is flexible but don't use it often because you will lose all benefits of TS
let favoriteActivities: string[]
favoriteActivities = ['Eating Meat']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    // console.log(hobby.map()) - error - map() does not work on strings - TS shines here!
}