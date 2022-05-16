// const person: {
//    name: string
//    age: number 
// } = {
var person = {
    name: 'Kion',
    age: 1,
    hobbies: ['Eating Meat', 'Attacking Moma feet']
};
// any type - it is flexible but don't use it often because you will lose all benefits of TS
var favoriteActivities;
favoriteActivities = ['Eating Meat'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
