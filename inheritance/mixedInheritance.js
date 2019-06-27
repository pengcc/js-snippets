// 7
function MyClass() {
    SuperClass.call(this);
    OtherSuperClass.call(this);
}

function SuperClass() {
    this.name = 'super';
}

SuperClass.prototype = {
    sayName() {
        console.log('hi', this.name);
    }
};

function OtherSuperClass() {
    this.type = 'other super';
}

OtherSuperClass.prototype = {
    sayType() {
        console.log('hiho ', this.type);
    }
};

// inherite a class
MyClass.prototype = Object.create(SuperClass.prototype);
console.log('MyClass.prototype.constructor --create--', MyClass.prototype.constructor);
// mixing
Object.assign(MyClass.prototype, OtherSuperClass.prototype);
console.log('MyClass.prototype.constructor --assign--', MyClass.prototype.constructor);
MyClass.prototype.constructor = MyClass;
console.log('reset', MyClass.prototype.constructor);
MyClass.prototype.myMethod = function myMethod() {};
