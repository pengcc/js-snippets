// composition of prototype and constructor
function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'yellow', 'blue'];
}

SuperType.prototype.sayName = function sayName() {
    console.log(this.name);
};

function SubType(name, age) {
    // constructor inheritance
    SuperType.call(this, name);
    this.age = age;
}

// protype inheritance
SubType.prototype = new SuperType();
// overwrite constructor of SubType.prototype
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function sayAge() {
    console.log(this.age);
};

const instance1 = new SubType('Nico', 29);
instance1.colors.push('white');
console.log(instance1.colors);
instance1.sayName();
instance1.sayAge();

const instance2 = new SubType('Jorge', 27);
console.log(instance2.colors);
instance2.sayName();
instance2.sayAge();
