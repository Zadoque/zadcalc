/**
 * Parses a mathematical expression to extract the next operation to perform.
 * The function determines whether the operation is multiplication/division or addition/subtraction
 * and delegates the extraction to the appropriate utility function.
 *
 * @param {string} expression - The mathematical expression containing operations.
 * @returns {Object|string} - An object with details of the operation (indices and operator sign) or the original expression if no operation is found.
 *
 * @requires ./utilities/extract-add-or-sub/extract-add-or-sub
 * @requires ./utilities/extract-mult-or-div/extract-mult-or-div
 */

const extractAddOrSub = require(`./utilities/extract-add-or-sub/extract-add-or-sub`);
const extractMultiOrDiv = require(`./utilities/extract-mult-or-div/extract-mult-or-div`);
const extractPotentiation = require(`./utilities/extract-potentiation/extract-potentiation`);
const parseOperation = (expression) =>{
    if(/\^/.test(expression)){
        return extractPotentiation(expression);
    }
    if(/[*/]/.test(expression)){
        return extractMultiOrDiv(expression);
    }
    if(/[-+]/.test(expression.slice(1))){
        return extractAddOrSub(expression);
    }
    return expression;

};

module.exports = parseOperation;
