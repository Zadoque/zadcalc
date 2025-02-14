/**
 * Determines the signs (+ or -) of two numbers in a mathematical expression based on their positions.
 * 
 * @param {string} str - The mathematical expression string to analyze.
 * @param {number} index1 - The index of the first digit of the first number.
 *                         If this is 0, the first sign is automatically '+'.
 * @param {number} index2 - The index of the arithmetic operator between the two numbers.
 *                         Used to determine the sign of the second number.
 * 
 * @returns {[string, string]} An array containing two signs:
 *                             [0] - Sign of the first number ('+' or '-')
 *                             [1] - Sign of the second number ('+' or '-')
 * 
 * @example
 * getSigns("-2+3", 1, 2)    // Returns ['-', '+']
 * getSigns("2-3", 0, 1)     // Returns ['+', '-']
 * getSigns("-2-3", 1, 2)    // Returns ['-', '-']
 * getSigns("2+3", 0, 1)     // Returns ['+', '+']
 */
const getSigns = (str, index1, index2) => {
    let signs = [];
    if (index1 == 0){
        signs.push('+');
    } else{
        if(/[-]/.test(str[index1 - 1])){
            signs.push('-');
        }
        else{signs.push('+')};
    }
    if(/[-]/.test(str[index2 + 1])){
        signs.push('-');
    } else {
        signs.push('+');
    }
    return signs;
}

module.exports = getSigns;