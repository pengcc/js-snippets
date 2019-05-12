const getRandomInt = (max) => Math.ceil(Math.random() * max);

const createArray = (len) => Array.from({ length: len }, () => getRandomInt(20));

const sortingArray1 = (arr) => Array.from(new Set(arr)).sort((a, b) => a - b);
const sortArray = (arr) => {
    let newArr = Array.from(new Set([arr]));
    newArr.sort((a, b) => a - b);
    return newArr;
};


const groupingIntArrayBySiblings = (arr) => arr.reduce((accumulator, currentValue, index, originArr) => {
    const isSibling = index > 0 && currentValue === (originArr[index - 1] + 1);
    if (isSibling) {
        accumulator[accumulator.length - 1].push(currentValue);
    } else {
        accumulator[accumulator.length] = [];
        accumulator[accumulator.length - 1].push(currentValue);
    }

    return accumulator;
}, []);

const groupingIntArray = (arr, m, b) => arr.reduce((accumulator, currentValue) => {
    if (currentValue < m) {
        accumulator[0].push(currentValue);
    }
    if (currentValue < b && currentValue >= m) {
        accumulator[1].push(currentValue);
    }
    if (accumulator >= b) {
        accumulator[2].push(currentValue);
    }
    return accumulator;
}, [[], [], []]);

const groupingIntArray1 = (arr, medium, max) => {
    let newArr = [];
    const smallers = arr.filter((item) => item < medium);
    const middle = arr.filter((item) => item < max && item >= medium); 
    const bigger = arr.filter((item) => item === max);
    
    if (smallers) {
        newArr.push(smallers);
    }

    if (middle) {
        newArr.push(middle);
    }

    if (bigger) {
        newArr.push(bigger);
    }

    return newArr;
};