const resolve = require('../../../resolve/resolve.js');
const extractExpressionInside = require('./ultilitys/extract-expression-inside.js');
const updateExpression = require('../update-expression/update-expression.js');
const simplifyParentheses = require('../simplify-parentheses/simplify-parentheses.js');
/**
 * 
 * @param {String} expression - A sting of a numerical expression with square brackets or/and parentheses.
 *  The operations supported are: '+', '-','*' or '/'
 * @returns {string} -The result of the numerical expression
 */
const simplifySquareBrack = (expression) => {
    while(expression.includes('[')){
        let info =  extractExpressionInside(expression);
        if(info.resolve_str.includes('(')){
            info.resolve_str = simplifyParentheses(info.resolve_str);
        }
        let result = `${resolve(info.resolve_str)}`;
        expression = updateExpression(info.expression,result, info.indexs);
    }
    return expression;

}
module.exports = simplifySquareBrack;