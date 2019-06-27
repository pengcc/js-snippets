/**
* @FixMe NaN ---> Number
* @return {String} Number, Object, Null, Undefined
*/
const getType = data => Object.prototype.toString.call(data).match(/^\[object\s(.*)\]$/, "")[1];

const isType = (str) => (obj) =>  Object.prototype.toString.call(obj) === `[object ${str}]`;
const isFunction = isType('Function');
const isArray = isType('Array');
const isNumber = (num) => !Number.isNaN(num) && isType('Number')(num);
const isNull = isType('Null');
const isUndefined = isType('Undefined');
