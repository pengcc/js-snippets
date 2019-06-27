/**
 * ################### demostrate the inheritance via constructor #########
 */
const constructorInheritingInstances = () => {
    function SuperType() {
        this.color = ['red', 'yellow', 'blue'];
    }

    SuperType.prototype.foo = function foo() {

    };

    function SubType() {
        // inherit SuperType
        SuperType.call(this);
    }

    const instance1 = new SubType();
    instance1.color.push('white');
    console.group('instance1');
    console.dir(instance1);
    console.log('instance1 colors: ', instance1.color);
    console.groupEnd();

    const instance2 = new SubType();
    console.group('instance2');
    console.dir(instance2);
    console.log('instance2 colors:', instance2.color);
    console.groupEnd();
};

constructorInheritingInstances();

// export default constructorInheritingInstances;
