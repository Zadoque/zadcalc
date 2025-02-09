const extractAddOrSub = require('./ultilitys/extract-add-or-sub/extract-add-or-sub');
const extractMultiOrDiv = require('./ultilitys/extract-multi-or-div/extract-mult-or-div')
/**
 * 
 * @param {String} expression - A string that just contains '+' or '-' or '*' or '/'
 @returns {object} { 
 *      @property {index_start} - The position where the first number or its sign begins.
 *      @property {index_end} - The position where the second number ends.
 *      @property {index_op} - The position of the operation
 *      @property {sign} - The operation itself, can be '*' or '/' or '+' or '-'
 * }
 */
const parseOperation = (expression) =>{
    if(/[\*\/]/.test(expression)){
        return extractMultiOrDiv(expression);
    } 
    return extractAddOrSub(expression);
}

module.exports = parseOperation;