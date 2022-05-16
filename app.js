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
var Role;
(function (Role) {
    Role[Role["KING"] = 0] = "KING";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["PRICE"] = 2] = "PRICE";
})(Role || (Role = {}));
var person = {
    name: 'Kion',
    age: 1,
    hobbies: ['Catching Mice', 'Eating Meat'],
    role: Role.KING
};
// person.role.push('prince')
// person.role[1] = 10
// person.role = [0, 'admin', 'user']
// any type - it is flexible but don't use it often because you will lose all benefits of TS
var favoriteActivities;
favoriteActivities = ["Eating Meat"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) - error - map() does not work on strings - TS shines here!
}
if (person.role === Role.KING) {
    console.log('is king');
}
