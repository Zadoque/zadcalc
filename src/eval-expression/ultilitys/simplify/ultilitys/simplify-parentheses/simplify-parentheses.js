const resolve = require('../../../resolve/resolve.js');
const extractExpressionInside = require('./ultilitys/extract-expression-inside.js');
const updateExpression = require('../update-expression/update-expression.js');
/**
 * Simplifies a numerical expression by resolving the expressions contained within parentheses.
 *
 * @param {String} expression - A string representing a numerical expression that may include parentheses and the operations: '+', '-', '*', or '/'.
 * @returns {String} The result of the simplified numerical expression after resolving all parentheses.
 */
const simplifyParentheses = (expression) => {
    while(expression.includes('(')){
        let info =  extractExpressionInside(expression);
        let result = `${resolve(info.resolve_str)}`;
        expression = updateExpression(info.expression,result, info.indexs);
    }
    return expression;

}
module.exports = simplifyParentheses;