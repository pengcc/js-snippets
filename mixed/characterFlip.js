const flipByCharCode = (str) => [...str].map((char) => {
    let isAlphabet = /[a-z]/i.test(char);
    let isLowercase = /[a-z]/.test(char);

    return !isAlphabet ? char : String.fromCharCode(char.charCodeAt(0) + 32 * (isLowercase ? -1 : 1));
}).join('');

const flipByCharCode = (str) => [...str].map((s) => !/[a-z]/i.test(s) ? s : String.fromCharCode(s.charCodeAt(0) + 32 * (/[a-z]/.test(s) ? -1 : 1))).join('');