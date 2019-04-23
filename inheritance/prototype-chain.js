const demostratePrototypoChain = () => {
    /**
     * ############### prototype chain inheritance ##############
     * constructor
     * prototype
     * instance
     */
    function SuperPrototype() {
        this.superName = 'super pro';
        this.superArr = ['foo', 'bar'];
    }

    SuperPrototype.prototype.getSuperProName = function getSuperProName() {
        return this.superName;
    };

    function SubType() {
        this.subName = 'sub type';
    }

    /*
    * declare the instance to get the property
    * and the method definein the prototype of SuperPrototype
    */
    const INSTANCE_SUPER = new SuperPrototype();
    /**
     * §§§ key operation §§§
     */
    SubType.prototype = INSTANCE_SUPER;

    SubType.prototype.getSubName = function getSubName() {
        return this.subName;
    };

    const SUB_INSTANCE = new SubType();

    console.log(SUB_INSTANCE);

    /**
     * !!! The one problem of the prototype chain inheritance is !!!
     * The alteration of the prototype' reference property array, object by one instance will be
     * applied to all the instances
     */
    const demoReferenceProptertyIssue = () => {
        const SUB_INSTANCE_FOO = new SubType();
        SUB_INSTANCE_FOO.superName = 'super name changed by instance foo';
        SUB_INSTANCE_FOO.superArr.push('added by foo');

        const SUB_INSTANCE_BAR = new SubType();
        console.log(SUB_INSTANCE_BAR.superName);
        console.log(SUB_INSTANCE_BAR.superArr);
    };

    demoReferenceProptertyIssue();

    /**
     * !!! constructor override issue !!!
     */
    const demoConstructorOverrideIsse = () => {

    };
    demoConstructorOverrideIsse();
};

export default demostratePrototypoChain;
