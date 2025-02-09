/**
 * 
 * @param {String} expression - A string that  contains '*' or '/'
 * @returns {object} { 
 *      @property {index_start} - The position where the first number or its sign begins.
 *      @property {index_end} - The position where the second number ends.
 *      @property {index_op} - The position of the operation
 *      @property {sign} - The operation itself, can be '*' or '/'
 * }
 */
const extractMultOrDiv = (expression) =>{
    let op_str = expression.match(/[\-\+]?[0-9]+(\.[0-9]+)?[\*\/]{1}[\-\+]?[0-9]+(\.[0-9]+)?/);
    let info = {
        index_start: op_str.index,
    }
    info.index_end = info.index_start + op_str[0].length - 1;
    info.index_op =  info.index_start + op_str[0].slice(1).search(/[\*\/]/) + 1;
    info.sign = expression[info.index_op];
    
    return info;
}

module.exports = extractMultOrDiv;