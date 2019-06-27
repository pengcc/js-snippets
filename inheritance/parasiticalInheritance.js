import { copyObject } from './utils';

function createNewObj(obj) {
    const clone = copyObject(obj);
    // enhance the object, like new methods
    clone.sayHi = function() {
        alert('Hi');
    };
    return clone;
}

// usage

const person = {
    name: 'Jo',
    age: 20
};

const newPerson = createNewObj(person);
newPerson.sayHi(); // Hi