/**
 * Extracts information about the first multiplication or division operation found in a mathematical expression string.
 *
 * @param {string} expression - The mathematical expression containing numbers and operators (* or /).
 *
 * @returns {Object} An object containing details about the extracted operation:
 * - {number} index_start - The starting index of the operation in the expression.
 * - {number} index_end - The ending index of the operation in the expression.
 * - {number} index_op - The index of the operator (* or /) within the operation.
 * - {string} sign - The operator symbol (* or /).
 *
 * @example
 * extractMultOrDiv("5+3*2-1")  // Returns { index_start: 2, index_end: 4, index_op: 3, sign: '*' }
 * extractMultOrDiv("10/2+3")   // Returns { index_start: 0, index_end: 3, index_op: 2, sign: '/' }
 */
const extractMultOrDiv = (expression) =>{
    let op_str = expression.match(/[-+]?[0-9]+(\.[0-9]+)?[*/]{1}[-+]?[0-9]+(\.[0-9]+)?/);
    let info = {
        index_start: op_str.index,
    };
    info.index_end = info.index_start + op_str[0].length - 1;
    info.index_op =  info.index_start + op_str[0].slice(1).search(/[*/]/) + 1;
    info.sign = expression[info.index_op];

    return info;
};

module.exports = extractMultOrDiv;
