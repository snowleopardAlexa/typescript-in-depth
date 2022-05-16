// const person: {
//    name: string
//    age: number
// } = {
//const person: {
  //name: string;
  //age: number;
  //hobbies: string[];
  //role: [number, string]; // tuple type
//} = {
  //name: "Kion",
  //age: 1,
  //hobbies: ["Eating Meat", "Attacking Moma feet"],
  // this is tuple and it must only have two elements - tuple is an array with fixed element length
  //role: [2, "king"],
//};

//const KING = 0
//const READ_ONLY = 1
//const prince = 2

// assigns labels to numbers
enum Role { KING, READ_ONLY, PRICE }

const person = {
    name: 'Kion',
    age: 1,
    hobbies: ['Catching Mice', 'Eating Meat'],
    role: Role.KING
}

// person.role.push('prince')
// person.role[1] = 10
// person.role = [0, 'admin', 'user']

// any type - it is flexible but don't use it often because you will lose all benefits of TS
let favoriteActivities: string[];
favoriteActivities = ["Eating Meat"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) - error - map() does not work on strings - TS shines here!
}

if (person.role === Role.KING) {
  console.log('is king')
}