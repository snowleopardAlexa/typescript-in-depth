// const person: {
//    name: string
//    age: number 
// } = {
const person = {    
    name: 'Kion',
    age: 1,
    hobbies: ['Eating Meat', 'Attacking Moma feet']
}

// any type - it is flexible but don't use it often because you will lose all benefits of TS
let favoriteActivities: string[]
favoriteActivities = ['Eating Meat']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby)
}