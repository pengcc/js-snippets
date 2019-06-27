function copyObject(obj) {
    function F() {}
    F.prototype = obj;
    return new F();
}

const isSymmetryNumber1 = (n) => {

    let str = (n).toString();
    let strMirror = [...str];
    strMirror.reverse();

    return str.length > 1 && str === strMirror.join('');
};

const isSymmetryNumber = (n) => n > 10 && `${n}` === [...`${n}`].reverse().join('');

const getSymmetryNumber = (num) => Array.from({ length: num }, (n, i) => i + 1).filter(isSymmetryNumber);

const findSumComponent = (array, sum) => {
    let result = [];
    [...new Set(array)].filter(item => item <= sum).forEach((x, idx, arr) => {
        let found = arr.find((item) => item === sum - x);
        if (found) {
            result.push([x, found]);
        }
        arr.shift();
    });
    return result;
};

const findSumComponent1 = (array, sum) => {
    let result = [];
    let setArr = [...array];
    for (const item of setArr) {
        let found = setArr.find( x => x === sum - item);
        if (found) {
            result.push([item, found]);
        }
        setArr.shift();
    }
    return result;
};

export {
    copyObject
};
