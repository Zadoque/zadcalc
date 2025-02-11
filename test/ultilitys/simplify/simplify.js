const simplifyParentheses = require('./ultilitys/simplify-parentheses/simplify-parentheses');
const simplifySquareBrack = require('./ultilitys/simplify-square-brack/simplify-square-brack');
const simplifyCurlyBrack = require('./ultilitys/simplify-curly-brack/simplify-curly-brack');
/**
 * 
 * @param {String} expression - An string that contains a valid numerical expression. It can contain: 
 * '{}', '[]', '()', '+', '-', '+', '*', '/', ex: {-2[9.4/8.90]{6-4/(5-3)}-8}
 *  * @returns 
 */

const simplify = (expression) => {
    if(expression.includes('{')){
        return simplifyCurlyBrack(expression);
    } else if( expression.includes('[')){
        return simplifySquareBrack(expression);
    } else if(expression.includes('(')){
        console.log(expression);
        return simplifyParentheses(expression);
    } else {
        return expression;
    }
}


module.exports = simplify;