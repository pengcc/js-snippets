/**
 * get intersection without duplications
 * [1,2,1,2], [2,2] --> [2]
 * @param {array} arr1
 * @param {array} arr2
 * @returns {array}
 */
const getIntersectionSet = (arr1, arr2) => {
    let newArr1 = Array.from(new Set(arr1));
    let newArr2 = Array.from(new Set(arr2));
    return newArr1.filter(item => newArr2.includes(item));
};

/**
 * get intersection include duplications
 * [1,2,1,2], [2,2] --> [2,2]
 * @param {array} arr1
 * @param {array} arr2
 * @returns {array}
 */
const getIntersection = (arr1, arr2) => {
    let result = [];
    let tempArr = [...arr2];
    /* eslint-disable */
    for (let item of arr) {
        if (tempArr.length === 0) {
            break;
        }
        let idx = tempArr.indexOf(item);
        if ( idx >= 0 ) {
            result.push(item);
            tempArr.splice(idx, 1);
        }
    }
    /* eslint-enable */
    return result;
};

export {
    getIntersectionSet,
    getIntersection
};
