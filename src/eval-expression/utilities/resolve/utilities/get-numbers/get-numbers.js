const getSigns = require(`./utilities/get-signs`);
/**
 * Extracts two numbers surrounding an operator in a mathematical expression string,
 * preserving their signs and converting them to numerical values.
 *
 * @param {string} str - The mathematical expression string to parse.
 *                      Should contain numbers with optional decimal points and signs.
 * @param {number} index - The position (index) of the operator in the string.
 *                        Used as reference point to extract adjacent numbers.
 *
 * @returns {number[]} An array containing two numbers:
 *                     [0] - The number before the operator
 *                     [1] - The number after the operator
 *                     Both numbers preserve their signs and are converted to Number type.
 *
 * @example
 * getNumbers("+68.8-0.6*5", 9)  // Returns [-0.6, 5]
 * getNumbers("1+2.5", 1)        // Returns [1, 2.5]
 * getNumbers("0.5^23", 3)      // Returns [0.5, 23]
 * getNumbers("@NEG0.5^22", 7)  // Returns [-0.5, 22]
 *
 * @requires ./utilities/get-signs
 */
const getNumbers = (str, index) => {
    let  numbers =  [``, ``];
    let indexs = [index,index];
    indexs[0]--;
    while(/[0-9\.]/.test(str[indexs[0]])){
        numbers[0] = `${str[indexs[0]]}${numbers[0]}`;
        if((/[+-]/.test(str[indexs[0] - 1]) && /[eE]/.test(str[indexs[0] - 2])) || /[eE]/.test(str[indexs[0] - 1])){
            numbers[0] = `${str[indexs[0] -2]}${str[indexs[0] - 1]}${numbers[0]}`;
            indexs[0] -= 3;
        }else{
            indexs[0]--;
        }
    }
    indexs[0]++;
    let signs = getSigns(str,indexs[0], index);
    if(/[-+]/.test(str[index + 1])){
        str = `${str.slice(0, index + 1)}${str.slice(index + 2)}`;
    }
    indexs[1]++;
    while(/[\d\.]/.test(str[indexs[1]])){
        numbers[1] += `${str[indexs[1]]}`;
        if(/[eE]/.test(str[indexs[1] + 1])){ // sempre que tem um e tem que ter pelo menos um número depois, ou um sinal que também faz parte do número
            numbers[1] += `${str[indexs[1] + 1]}`;
            numbers[1] += `${str[indexs[1] + 2]}`;
            indexs[1] += 3;
        }
        else{
            indexs[1]++;
        }
    }
    for(let i = 0; i < 2; i++){
        numbers[i] = Number(`${signs[i]}${numbers[i]}`);
    }
    return numbers;
};
module.exports = getNumbers;
