const resolve = require('../resolve/resolve.js');
const extractExpressionInside = require('./ultilitys/extract-expression-inside/extract-expression-inside.js');
const updateExpression = require('./ultilitys/update-expression/update-expression.js')
/**
 * 
 * @param {String} expression - A sting of a numerical expression with parentheses, it can include '+', '-','*' or '/'
 * @returns {string} -The result of the string without parentheses
 */
const simplify = (expression) => {
    while(expression.includes('(')){
        let info =  extractExpressionInside(expression);
        let result = `${resolve(info.resolve_str)}`;
        expression = updateExpression(info.expression,result, info.indexs);
    }
    return expression;

}
module.exports = simplify;