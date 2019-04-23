function LazyMan(name) {
    if (this instanceof LazyMan) {
        this.name = name;
    } else {
        console.log(`I am ${name}.`);
        return new LazyMan(name);
    }
}

LazyMan.prototype = {
};
