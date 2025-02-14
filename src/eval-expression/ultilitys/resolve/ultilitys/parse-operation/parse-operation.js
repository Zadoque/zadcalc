/**
 * Parses a mathematical expression to extract the next operation to perform.
 * The function determines whether the operation is multiplication/division or addition/subtraction
 * and delegates the extraction to the appropriate utility function.
 * 
 * @param {string} expression - The mathematical expression containing operations.
 * @returns {Object|string} - An object with details of the operation (indices and operator sign) or the original expression if no operation is found.
 * 
 * @requires ./ultilitys/extract-add-or-sub/extract-add-or-sub
 * @requires ./ultilitys/extract-mult-or-div/extract-mult-or-div
 */

const extractAddOrSub = require('./ultilitys/extract-add-or-sub/extract-add-or-sub');
const extractMultiOrDiv = require('./ultilitys/extract-mult-or-div/extract-mult-or-div')

const parseOperation = (expression) =>{
    if(/[*/]/.test(expression)){
        return extractMultiOrDiv(expression);
    }
    if(/[-+]/.test(expression.slice(1))){
        return extractAddOrSub(expression);
    }
    return expression;
    
}

module.exports = parseOperation;