const simplifyParentheses = require('./ultilitys/simplify-parentheses/simplify-parentheses');
const simplifySquareBrack = require('./ultilitys/simplify-square-brack/simplify-square-brack');
const simplifyCurlyBrack = require('./ultilitys/simplify-curly-brack/simplify-curly-brack');
/**
 * 
 * @param {String} expression - An string that contains a valid numerical expression. It can contain: 
 * '{}', '[]', '()', '+', '-', '+', '*', '/', ex: {-2[9.4/8.90]{6-4/(5-3)}-8}
 *  * @returns The result of the expression or a messsage error: division by zero error
 */

const simplify = (expression) => {
    do{
        if(expression.includes('{')){
            expression =  simplifyCurlyBrack(expression);
        } else if( expression.includes('[')){
            expression = simplifySquareBrack(expression);
        } else if(expression.includes('(')){
            expression = simplifyParentheses(expression);
        }
    }while(/[{[(]/.test(expression))
    return expression;
    
}


module.exports = simplify;