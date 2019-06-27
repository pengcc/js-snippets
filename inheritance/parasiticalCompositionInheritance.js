// 6
function inheritingPrototype(subProto, superProto) {
    const proto = Object.create(superProto.prototype); // copy parent's prototype
    proto.constructor = subProto;
    subProto.prototype = proto;
}

function SuperProto(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'yellow'];
}

SuperProto.prototype.sayName = function sayName() {
    console.log(this.name);
};

function SubProto(name, age) {
    SuperProto.call(this, name);
    this.age = age;
}

inheritingPrototype(SubProto, SuperProto);

SubProto.prototype.sayAge = function sayAge() {
    console.log(this.age);
};

let instance1 = new SubProto('xyz', 23);
let instance2 = new SubProto('abc', 22);

instance1.colors.push('new color 1');
instance2.colors.push('new color 2');

let instance = new SubProto('nicho', 30);
console.log(instance);
