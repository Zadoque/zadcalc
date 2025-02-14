/**
 * Extracts information about the first addition or subtraction operation found in a mathematical expression.
 * 
 * @param {string} expression - A mathematical expression string containing numbers with '+' and '-' operators.
 *                             Can include decimal numbers and signs (e.g., "+1.5-2.3", "-1+2").
 * 
 * @returns {Object} Information about the found operation
 * @returns {number} returns.index_start - The starting position of the first number (including its sign)
 * @returns {number} returns.index_end - The ending position of the second number
 * @returns {number} returns.index_op - The position of the operator in the expression
 * @returns {string} returns.sign - The operator itself ('+' or '-')
 * 
 * @example
 * extractAddOrSub("+1.5-2.3")  // Returns { 
 *                              //   index_start: 0,
 *                              //   index_end: 6,
 *                              //   index_op: 3,
 *                              //   sign: '-'
 *                              // }
 * 
 * extractAddOrSub("10+5")      // Returns {
 *                              //   index_start: 0,
 *                              //   index_end: 3,
 *                              //   index_op: 2,
 *                              //   sign: '+'
 *                              // }
 */
const extractAddOrSub = (expression) =>{
    let op_str = expression.match(/[-+]{0,2}[0-9]+(\.[0-9]+)?[+-]{1}[-+]?[0-9]+(\.[0-9]+)?/);
    let info = {
        index_start: op_str.index,
    }
    info.index_end = info.index_start + op_str[0].length - 1;
    info.index_op =  info.index_start + op_str[0].slice(1).search(/[+-]/) + 1;
    info.sign = expression[info.index_op];
    
    return info;
}

module.exports = extractAddOrSub;