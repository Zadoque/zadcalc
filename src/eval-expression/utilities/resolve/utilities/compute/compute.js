/**
 * Performs basic arithmetic operations on two numbers and returns the result as a string.
 * For positive results, prepends a '+' sign to the returned string.
 *
 * @param {number[]} numbers - An array containing exactly two numbers to operate on.
 *                            numbers[0] is the first operand.
 *                            numbers[1] is the second operand.
 * @param {string} operation - The arithmetic operator to apply.
 *                            Must be one of: '+', '-', '*', or '/'.
 *
 * @returns {string} The result of the arithmetic operation as a string.
 *                   Positive results are prefixed with '+'.
 *
 * @example
 * compute([5, 3], '+')  // Returns "+8"
 * compute([5, 3], '-')  // Returns "+2"
 * compute([3, 5], '-')  // Returns "-2"
 * compute([5, 3], '*')  // Returns "+15"
 * compute([6, 2], '/')  // Returns "+3"
 */
const compute = (numbers, operation) => {
    let result = ``;
    switch(operation){
    case `^`:
        result = `${numbers[0] **numbers[1]}`;
        break;
    case `+`:
        result = `${numbers[0] + numbers[1]}`;
        break;
    case `-`:
        result = `${numbers[0] - numbers[1]}`;;
        break;
    case `*`:
        result = `${numbers[0] * numbers[1]}`;;
        break;
    case `/`:
        result = `${numbers[0] / numbers[1]}`;;
        break;
    }
    if(Number(result) >= 0){
        return `+${result}`;
    }
    return result;
};

module.exports = compute;
