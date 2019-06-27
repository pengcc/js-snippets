function cpObject(obj) {
    // shallow copy obj
    function F() {}
    F.prototype = obj;
    return new F();
}

const person = {
    name: 'Jon',
    friends: ['Yo', 'Wo', 'Ho']
};

const anotherPerson = cpObject(person);
anotherPerson.name = 'Greg';
anotherPerson.friends.push('Bob');

const newAnotherPersion = cpObject(person);
newAnotherPersion.name = 'Li';
newAnotherPersion.friends.push('Barbie');

console.log(person);
