/**
 * flatten array
 */
const flattenArray = arr => {
    let result = [];
    arr.forEach(element => {
        result = result.concat(Array.isArray(element) ? flattenArray(element) : element);
    });
    return result;
};

const flattenArrayReduce = arr => arr.reduce((prev, current) => prev.concat(Array.isArray(current) ? flattenArrayReduce(current) : current), []);

const flattenArrayOneLevel = arr => [].concat(...arr);

export {
    flattenArray,
    flattenArrayOneLevel,
    flattenArrayReduce
};

